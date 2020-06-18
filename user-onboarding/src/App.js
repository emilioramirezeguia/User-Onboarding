import React, { useState, useEffect } from 'react';
import Form from "./components/Form.jsx";
import User from "./components/User.jsx"
import formSchema from "./validation/formSchema.js";
import axios from "axios";
import * as Yup from "yup";

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

  // Initial button status
  const initialButtonStatus = false;

  const initialFormErrors = {
    name: "",
    email: "",
    password: "",
    termsOfService: ""
  }

  // onChange event handler
  const handleChange = event => {
    const { name, value } = event.target;

    Yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setForm({ ...form, [name]: value });
  }

  const handleCheckbox = event => {
    const { name, checked } = event.target;

    Yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(checked)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setForm({ ...form, [name]: checked });
  }

  // Form state
  const [form, setForm] = useState(emptyForm);
  // User state
  const [users, setUsers] = useState(registeredUsers);
  // Button state
  const [buttonStatus, setButtonStatus] = useState(initialButtonStatus);
  // Error state
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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

    postNewUser(newUser)
  }

  useEffect(() => {
    // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `form` CHANGES
    formSchema.isValid(form).then((valid) => {
      setButtonStatus(!valid);
    });
  }, [form]);

  return (
    <div>
      <Form
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        buttonStatus={buttonStatus}
        errors={formErrors}
      />

      {
        users.map(user => {
          return <User key={user.password} user={user} buttonStatus={buttonStatus} />
        })
      }
    </div>
  );
}

export default App;
