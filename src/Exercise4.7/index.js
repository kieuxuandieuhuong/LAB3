import React from "react";
import ReactDOM from "react-dom";

class UserForm extends React.Component {
  render() {
    return (
      <form>
        <label>Enter a user name:</label>
        <input />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const Ex47 = () => {
  root.render(<UserForm/>);
};

export default Ex47;