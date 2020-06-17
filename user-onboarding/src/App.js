import React, { useState } from 'react';
import Form from "./components/Form.jsx";

function App() {
  // Here's an empty form for use in state and clean out form after submission
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    termsOfService: false
  }

  // Form state
  const [form, setForm] = useState(emptyForm);

  // onChange event handler
  const handleChange = event => {
    console.log(event);
  }

  // onSubmit event handle
  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
  }
  return (
    <div>
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
