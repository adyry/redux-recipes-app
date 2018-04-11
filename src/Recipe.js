import React from "react";
import { connect } from "react-redux";

const Recipe = ({ recipes }) => {
  return <ul>{recipes.map(v => <li key={v.id}>{v.text}</li>)}</ul>;
};

export { Recipe };
