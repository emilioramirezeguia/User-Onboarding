import React, { useState } from 'react';
import Form from "./components/Form.jsx";

function App() {
  // Empty form for use in state and clean out form after submission
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    termsOfService: false
  }

  // Empty array that takes in a user object
  const user = [];

  // onChange event handler
  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleCheckbox = event => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  }

  // onSubmit event handle
  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
  }

  // Initial button status
  const initialButtonStatus = false;

  // Form state
  const [form, setForm] = useState(emptyForm);
  // Button state
  const [buttonStatus, setButtonStatus] = useState(initialButtonStatus)
  return (
    <div>
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        buttonStatus={buttonStatus}
      />
      {

      }
    </div>
  );
}

export default App;
