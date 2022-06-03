import React, { Component } from 'react';
import '../custom.css';
import { Select } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import * as routes from './allRoutes';
// import { useHistory } from 'react-router';
// import history from './utils/History';

class Login extends Component {
  // const history = useHistory();

  // const loginHandler = () => {
  //   console.log('Fff');
  //   history.push({ pathame: '/brand/posneg-list' });
  // };
  render() {
    return (
      <>
        <div className="row" style={{ borderBottom: '1px solid #C0C0C0' }}>
          <p className="offset-xl-11 offset-lg-11 ptext">Support </p>
        </div>
        <form className="formDiv">
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputEmail4">Username:</label>
              <input
                type="email"
                class="form-control loginInputsWidth"
                id="inputEmail4"
                // placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Password:</label>
            <input
              type="text"
              class="form-control loginInputsWidth"
              id="inputAddress"
              // placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Organization:</label> <br />
            <Select
              style={{ width: 300 }}
              options={[
                { id: 1, label: 'BOND', value: 1 },
                { id: 2, label: 'erere', value: 2 },
              ]}
            />
          </div>

          <button
            type="button"
            class="btn btn-primary"
            // onClick={() => this.loginHandler()}
          >
            Login
          </button>
        </form>
      </>
    );
  }
}
