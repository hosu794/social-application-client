import PropTypes from "prop-types";
import { Component } from "react";
export const IUser = (Component.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  downloadAvatar: PropTypes.string.isRequired,
});
