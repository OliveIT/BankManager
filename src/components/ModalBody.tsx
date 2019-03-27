import React, { Component, CSSProperties } from 'react';

class ModalBody extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  getFieldValue() {
    return {
      id: 10,
      account: "Lorem Ipsum new",
      employee: "Employee",
      bank: "bank",
      branch: "branch",
      accType: "accType",
      accNumber: "accNumber",
      empNumber: "empNumber",
      lastUpdate: "1234-12-12 22:22:22"
    }
  }

  render() {
    const steps = ["Bank", "Account", "Employee", "Confirmation"];
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
          {this.props.saveStep == 0 ?
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="modal-input-bank">Bank Name</label>
              <input type="text" className="form-control" id="modal-input-bank" placeholder="Input Bank name"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-branch">Branch Name</label>
              <input type="text" className="form-control" id="modal-input-branch" placeholder="Input Branch name"/>
            </div>
          </div> : null}
          
          {this.props.saveStep == 1 ?
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="modal-input-account">Account Holder’s name</label>
              <input type="text" className="form-control" id="modal-input-account" placeholder="Input Account Holder’s name"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-accType">Account Type</label>
              <input type="text" className="form-control" id="modal-input-accType" placeholder="Input Account type"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-accNumber">Account Number</label>
              <input type="text" className="form-control" id="modal-input-accNumber" placeholder="Input Account number"/>
            </div>
          </div> : null}
          
          {this.props.saveStep == 2 ?
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="modal-input-employee">Employee Name</label>
              <input type="text" className="form-control" id="modal-input-employee" placeholder="Input Employee name"/>
            </div>
            <div className="form-group">
              <label htmlFor="modal-input-empNumber">Employee Number</label>
              <input type="text" className="form-control" id="modal-input-empNumber" placeholder="Input Employee number"/>
            </div>
          </div> : null}
          
          {this.props.saveStep == 3 ?
          <div className="col-md-12">
          </div> : null}
        </div>
      </div>);
  }
}

export default ModalBody;
