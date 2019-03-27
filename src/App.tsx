import React, { Component, CSSProperties } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from "react-redux";

import { fetchData, insertData, updateData, deleteData } from './redux/actions';
import logo from './logo.svg';
import './App.css';
import ModalBody from './components/ModalBody';
import {BankItem} from './interfaces/BankItem';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.fetchData();
    this.state = {
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
    return (<div></div>);
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

  afterInsertRow(row: BankItem) {
    console.log("AAAAAAAAAAAA");
    this.setState({saveStep: 0});
    this.props.insertData(row, () => this.props.fetchData());
  }

  afterSaveCell(row: BankItem, cellName: any, cellValue: String, props: { rowIndex: number; colIndex: number }) {
    this.props.updateData(row);
  }

  afterDeleteRow(rowKeys: ReadonlyArray<any>, rows: ReadonlyArray<BankItem>) {
    this.props.deleteData(rowKeys);
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
                data={this.props.bankItems}
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
                  insertModalFooter: this.insertModalFooter.bind(this),
                  afterInsertRow: this.afterInsertRow.bind(this),
                  afterDeleteRow: this.afterDeleteRow.bind(this),
                }}
                cellEdit={{
                  mode: 'dbclick',
                  blurToSave: true,
                  afterSaveCell: this.afterSaveCell.bind(this)
                }}
              >
                <TableHeaderColumn dataField="id" dataAlign="right" dataSort isKey hidden>id</TableHeaderColumn>
                <TableHeaderColumn dataField="account" dataAlign="right" dataSort>Account Name</TableHeaderColumn>
                <TableHeaderColumn dataField="employee" dataAlign="right" dataSort>Employee Name</TableHeaderColumn>
                <TableHeaderColumn dataField="bank" dataAlign="right" dataSort>Bank Name</TableHeaderColumn>
                <TableHeaderColumn dataField="branch" dataAlign="right" dataSort>Branch Name</TableHeaderColumn>
                <TableHeaderColumn dataField="accType" dataAlign="right" dataSort>Account Type</TableHeaderColumn>
                <TableHeaderColumn dataField="accNumber" dataAlign="right" dataSort>Account Number</TableHeaderColumn>
                <TableHeaderColumn dataField="empNumber" dataAlign="right" dataSort>Employee Number</TableHeaderColumn>
                <TableHeaderColumn dataField="lastUpdate" dataAlign="right" dataSort editable={false}>Last Update</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  bankItems: state.reducer.bankItems
});

const mapDispatchToProps = {
  fetchData,
  insertData,
  updateData,
  deleteData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);