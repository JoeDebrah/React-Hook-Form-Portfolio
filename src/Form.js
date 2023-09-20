//Working Code

import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function FormValid() {
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      className="form-data"
      onSubmit={handleSubmit((data) => setData(Array.of(data)))}
    >
      <div className="login">User Login Portal</div>
      <Form.Field>
        <input
          placeholder="First Name"
          type="text"
          {...register("firstName", { required: true, maxLength: 10 })}
        />
      </Form.Field>
      {errors.firstName && <p className="error">Please check the First Name</p>}
      <Form.Field>
        <input
          placeholder="Last Name"
          type="text"
          {...register("lastName", { required: true, maxLength: 10 })}
        />
      </Form.Field>
      {errors.lastName && <p className="error">Please check the Last Name</p>}
      <Form.Field>
        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
          })}
        />
      </Form.Field>
      {errors.email && <p className="error">Please check the Email</p>}
      <Form.Field>
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
          })}
        />
      </Form.Field>
      {errors.password && <p className="error">Required min: 8 & max: 15 characters with UpperCase and number</p>}
      <div className="card">
        <h1 className="p">Your Input</h1>
        {data &&
          data.map((item) => (
            <div key={item} className="container">
              <p>FirstName: {item.firstName}</p>
              <p>LastName: {item.lastName}</p>
              <p>Email: {item.email}</p>
              <p>Password: {item.password}</p>
            </div>
          ))}
      </div>
      <input type="submit" />
    </Form>
  );
}
