import PropTypes from "prop-types";
import { Component } from "react";
import { IUser } from "./";

export const IComment = (Component.PropTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  createdBy: PropTypes.instanceOf(IUser),
});
