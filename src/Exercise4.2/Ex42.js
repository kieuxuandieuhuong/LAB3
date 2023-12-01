import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./antd.css";

const showAlert = () => {
  alert("Alert!!!");
};

const element = (
  <Button style={{ margin: "10px 10px" }} type="primary" onClick={showAlert}>
    Alert me!
  </Button>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

const Ex1 = () => {
  root.render(element);
};

export default Ex1;