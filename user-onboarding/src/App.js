import React, { useState } from 'react';
import Form from "./components/Form.jsx";
import Welcome from "./components/Welcome.jsx"
import axios from "axios";

function App() {
  // Empty form for use in state and clean out form after submission
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    termsOfService: false
  }

  // Empty array that takes in a user object
  const registeredUsers = [{
    name: "Emilio",
    email: "emilio@hey.com",
    password: "rainbows",
    termsOfService: true
  }];

  // onChange event handler
  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleCheckbox = event => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  }

  // Initial button status
  const initialButtonStatus = false;

  // Form state
  const [form, setForm] = useState(emptyForm);
  // User state
  const [users, setUsers] = useState(registeredUsers);
  // Button state
  const [buttonStatus, setButtonStatus] = useState(initialButtonStatus)

  // Post new user to reqres API
  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setForm(emptyForm);
      })
  }

  // onSubmit event handle
  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      termsOfService: form.termsOfService
    }
    debugger;
    postNewUser(newUser)
  }

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
        users.map(user => {
          return <Welcome key={user.password} user={user} />
        })
      }
    </div>
  );
}

export default App;
