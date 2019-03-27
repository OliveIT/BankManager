import React, { Component, CSSProperties } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import logo from './logo.svg';
import './App.css';
import ModalBody from './components/ModalBody';

interface BankItem {
  id: number,
  account: string,
  employee: string,
  bank: string,
  branch: string,
  accType: string,
  accNumber: string,
  empNumber: string,
  lastUpdate: Date,
}

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    var banks: object[] = [];
    for (var i = 0; i < 3; i ++)
      banks.push(
        {
          id: i,
          account: "Lorem Ipsum" + i,
          employee: "Employee",
          bank: "bank",
          branch: "branch",
          accType: "accType",
          accNumber: "accNumber",
          empNumber: "empNumber",
          lastUpdate: "1234-12-12 22:22:22"
        });


    this.state = {
      banks: banks,
      saveStep: 0
    }
  }

  idFormat(index: number, row: BankItem) {
    return `<div class="form-check">
              <input type="checkbox" class="form-check-input" id="table-check-${index}">
              <label class="form-check-label" for="table-check-${index}">${index}</label>
            </div>`;
  }

  insertModalHeader(onClose: () => void, onSave: () => void) {
    return (
      <div>
      </div>
    );
  }
  insertModalBody(columns: any, validateState: { [dataField: string]: string }, ignoreEditable: boolean) {
    const steps = ["Bank", "Account", "Employee", "Confirmation"];
    return (<ModalBody columns={ columns } validateState={ validateState } ignoreEditable={ ignoreEditable } saveStep={this.state.saveStep}/>);
  }

  insertModalFooter(onClose: () => void, save: () => void) {
    return (
      <div className="btn-group">
        {this.state.saveStep != 0 ?
        <button className="btn btn-step" onClick={this.onStepMove.bind(this, -1)}>
          <i className="fas fa-chevron-left"> </i>
        </button> : null}
        {this.state.saveStep != 3 ?
        <button className="btn btn-step" onClick={this.onStepMove.bind(this, 1)}>
          <i className="fas fa-chevron-right"> </i>
        </button> :
        <button className="btn btn-step" onClick={() => save()}>
          <i className="far fa-save"> </i>
        </button>}
      </div>);
  }

  onStepMove(value: number) {
    this.setState({
      saveStep: this.state.saveStep + value
    });
  }

  getFieldValue() {
    console.log("getFieldValue")
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>Employee bank account list management</h2>
            <hr/>
            <div className="main-table">
              <BootstrapTable
                data={this.state.banks}
                striped
                hover
                condensed
                pagination
                insertRow
                deleteRow
                search
                selectRow = {{
                  mode: 'checkbox',
                  clickToSelect: true,
                  className: 'selected'
                }}
                options={{
                  insertModalHeader: this.insertModalHeader.bind(this),
                  insertModalBody: this.insertModalBody.bind(this),
                  insertModalFooter: this.insertModalFooter.bind(this)
                }}
              >
                <TableHeaderColumn dataField="account" dataAlign="right" isKey dataSort>Account Name</TableHeaderColumn>
                <TableHeaderColumn dataField="employee" dataAlign="right" dataSort>Employee Name</TableHeaderColumn>
                <TableHeaderColumn dataField="bank" dataAlign="right" dataSort>Bank Name</TableHeaderColumn>
                <TableHeaderColumn dataField="branch" dataAlign="right" dataSort>Branch Name</TableHeaderColumn>
                <TableHeaderColumn dataField="accType" dataAlign="right" dataSort>Account Type</TableHeaderColumn>
                <TableHeaderColumn dataField="accNumber" dataAlign="right" dataSort>Account Number</TableHeaderColumn>
                <TableHeaderColumn dataField="empNumber" dataAlign="right" dataSort>Employee Number</TableHeaderColumn>
                <TableHeaderColumn dataField="lastUpdate" dataAlign="right" dataSort>Last Update</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;