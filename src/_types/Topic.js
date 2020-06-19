import PropTypes from "prop-types";

import { Component } from "react";
import { IUser } from "./User";

export const ITopic = (Component.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  createdBy: PropTypes.instanceOf(IUser).isRequired,
});
