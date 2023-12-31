import React from "react";
import ReactDOM from "react-dom";

const smartPeople = [
  { name: 'Johann Goethe', age: 82, IQ: 210},
  { name: 'Albret Einstein', age: 76, IQ: 205},
  { name: 'Leonardo da Vinci', age: 67, IQ: 180},
  { name: 'Isaac Newton', age: 84, IQ: 190},
  { name: 'James Maxwell', age: 48, IQ: 190},
  { name: 'Rudolf Clausius', age: 66, IQ: 190},
  { name: 'Nicolaus Copernicus', age: 70, IQ: 160},
  { name: 'Gottfried Leibniz', age: 70, IQ: 182},
  { name: 'William Sidis', age: 46, IQ: 200}
]

const element = (
  <ul>
    {smartPeople.map((person, index) => (
      <li key={index}>
        <strong>Name:</strong> {person.name}, <strong>Age:</strong> {person.age}, <strong>IQ:</strong> {person.IQ}
      </li>
    ))}
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

const Ex43 = () => {
  root.render(element);
};

export default Ex43;