import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Field } from "redux-form";
import "./form.scss";

export default class TextArea extends Component {
  render() {
    return (
      <div className="mb-2">
        <div>
          <Field name="notes" component="textarea" placeholder="Message" required />
        </div>
      </div>
    );
  }
}
