import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import InputTemplate from "./customForm.jsx";
import { signIn, getJWTsignIn } from "../../action/index";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./login.scss";

class loginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  //  componentwillMount(){
  //   console.log('this.props.getJWTsignIn() is running')
  //   this.props.getJWTsignIn();

  //  }

  handleLoginFormSubmit = async value => {
    console.log("handleFormSubmit-Value", value);
    if ((await this.props.signIn(value)) === 401) {
      this.setState({
        error: true,
      });
      return;
    }
    this.props.signIn(value);
    this.props.history.push("/");
  };

  createAccount = () => {
    this.props.history.push("/createAccount");
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="sclogin row">
        {/* <h2 className='loginheader center col-md-6 offset-md-3 mt-2'>Sweet Corner</h2> */}
        <div className="formborder col-md-6 offset-md-3">
          <h2 className="m-3">Sign-In</h2>
          <h3 className="center text-danger">{this.state.error ? "Incorrect Login" : ""}</h3>
          <form className="col-sm-12" onSubmit={handleSubmit(this.handleLoginFormSubmit)}>
            <Field
              label="Email(phone for mobile accounts)"
              placeholder="email"
              name="email"
              component={InputTemplate}
              autoComplete="email"
            />
            <Field
              label="Password"
              placeholder="password"
              name="password"
              type="text"
              component={InputTemplate}
              autoComplete="new-password"
            />
            <div>
              <button className="btn btn-warning mt-2 loginbutton" type="submit" disabled={pristine || submitting}>
                SEND
              </button>
            </div>
            <div className="mt-5 mb-5">
              <p className="center">New to Sweet Corner</p>
              <hr />
              <button onClick={this.createAccount} className="btn btn-light  loginbutton" type="submit">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

loginPage = reduxForm({
  form: "login-Page",
  validate: validate,
})(loginPage);

export default connect(
  null,
  { signIn, getJWTsignIn },
)(loginPage);

function validate(formValues) {
  const { email, password } = formValues;

  const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const errors = {};

  if (!email) {
    errors.email = "Please enter your email";
  } else if (!emailRegEx.test(email)) {
    errors.email = <p>Please enter a valid email address. Example: me@example.com</p>;
  }

  if (!password) {
    errors.phone = "Please enter password";
  } else if (password.length < 6) {
    errors.password = "password must be at least 6 ";
  }

  return errors;
}
