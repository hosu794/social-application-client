import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions, authActions } from "../../_actions";

import FileUpload from "./FileUpload";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";

function ChangeCredentials() {
  const dispatch = useDispatch();

  return (
    <div class="container has-text-centered columns">
      <ChangeUsername />
      <ChangePassword />
      <FileUpload />
    </div>
  );
}

export default ChangeCredentials;
