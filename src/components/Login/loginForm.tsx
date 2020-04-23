import React from "react";
import { Button, Form } from "semantic-ui-react";

const LoginForm = () => (
  <Form>
    <Form.Field>
      <label>User Name</label>
      <input placeholder="User Name" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" />
    </Form.Field>
    <Button type="submit">Log In</Button>
  </Form>
);

export default LoginForm;
