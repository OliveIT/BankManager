import React, { Component, createRef } from 'react';
import {BankItem} from '../interfaces/BankItem';

class ModalBody extends Component<any, any> {
  private inputAccount = createRef<HTMLInputElement>();
  private inputEmployee = createRef<HTMLInputElement>();
  private inputBank = createRef<HTMLInputElement>();
  private inputBranch = createRef<HTMLInputElement>();
  private inputAccType = createRef<HTMLInputElement>();
  private inputAccNumber = createRef<HTMLInputElement>();
  private inputEmpNumber = createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }

  getFieldValue(): BankItem {
    let accNumber = this.inputAccNumber.current ? this.inputAccNumber.current.value : "";
    let empNumber = this.inputEmpNumber.current ? this.inputEmpNumber.current.value : "";
    let orgStr = "0000000000000000000";
    
    if (accNumber == null) accNumber = "";
    if (accNumber.length < 7) {
      accNumber = orgStr + accNumber;
      accNumber = accNumber.substr(accNumber.length - 7, 7);
    }
    if (empNumber == null) empNumber = "";
    if (empNumber.length < 15) {
      empNumber = orgStr + empNumber;
      empNumber = empNumber.substr(empNumber.length - 15, 15);
    }
    return {
      id: String((new Date()).getTime()),
      account: this.inputAccount.current ? this.inputAccount.current.value : "",
      employee: this.inputEmployee.current ? this.inputEmployee.current.value : "",
      bank: this.inputBank.current ? this.inputBank.current.value : "",
      branch: this.inputBranch.current ? this.inputBranch.current.value : "",
      accType: this.inputAccType.current ? this.inputAccType.current.value : "",
      accNumber: accNumber,
      empNumber: empNumber,
      lastUpdate: (new Date()).toUTCString()
    };
  }

  render() {
    const steps = ["Bank", "Account", "Employee", "Confirmation"];
    const fields = this.getFieldValue();
    return (
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
            <nav className="insert-steps nav">
              {steps.map((step, index) =>
                <a key={index} className={"nav-link " + (this.props.saveStep == index ? "active" : "")} href="#">{step}</a>
              )}
            </nav>
          </div>
          <div className={`col-md-12 ${this.props.saveStep != 0 && "d-none"}`}>
            <div className="form-group">
              <label htmlFor="modal-input-bank">Bank Name</label>
              <input type="text" ref={this.inputBank} className="form-control" id="modal-input-bank" placeholder="Input Bank name. (ex: “Citibank”, “JP Morgan Chase”)"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-branch">Branch Name</label>
              <input type="text" ref={this.inputBranch} className="form-control" id="modal-input-branch" placeholder="Input Branch name. (ex: “LA Central”, “Branch 42”)"/>
            </div>
          </div>
          
          <div className={`col-md-12 ${this.props.saveStep != 1 && "d-none"}`}>
            <div className="form-group">
              <label htmlFor="modal-input-account">Account Holder’s name</label>
              <input type="text" ref={this.inputAccount} className="form-control" id="modal-input-account" placeholder="Input Account Holder’s name. (ex: “Gregory House”, “Elliot Alderson”)"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-accType">Account Type</label>
              <input type="text" ref={this.inputAccType} className="form-control" id="modal-input-accType" placeholder="Input Account type. (ex: “Savings”, “Checking”)"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-accNumber">Account Number</label>
              <input type="number" ref={this.inputAccNumber} className="form-control" id="modal-input-accNumber" placeholder="Input Account number. (ex: “0000042”)"/>
            </div>
          </div>
          
          <div className={`col-md-12 ${this.props.saveStep != 2 && "d-none"}`}>
            <div className="form-group">
              <label htmlFor="modal-input-employee">Employee Name</label>
              <input type="text" ref={this.inputEmployee} className="form-control" id="modal-input-employee" placeholder="Input Employee name. (ex: “Dr. Gregory House”, “Mr. Robot”)"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-empNumber">Employee Number</label>
              <input type="number" ref={this.inputEmpNumber} className="form-control" id="modal-input-empNumber" placeholder="Input Employee number. (ex: “012345678901234”)"/>
            </div>
          </div>
          
          {this.props.saveStep == 3 ?
          <div className="col-md-12">
            {Object.keys(fields).map((key, index) => 
              <div className="form-group row" key={index}>
                <label htmlFor="staticEmail" className="col-sm-4 col-form-label font-weight-bold">{key}</label>
                <div className="col-sm-8">
                  <label className="form-control-plaintext">{(key == "lastUpdate") ? fields[key].toString() : fields[key]}</label>
                </div>
              </div>
            )}
          </div> : null}
        </div>
      </div>);
  }
}

export default ModalBody;
