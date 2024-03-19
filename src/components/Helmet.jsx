import React from "react";

const Helmet = (props) => {
  document.title = props.title + " - NamaCV";
  return <div>{props.children}</div>;
};

export default Helmet;
