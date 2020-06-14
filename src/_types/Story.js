import PropTypes from "prop-types";
import { Component } from "react";

export const IStory = (Component.PropTypes = {
  topic: PropTypes.object.isRequired,
  createdBy: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  totalLoves: PropTypes.number.isRequired,
});
