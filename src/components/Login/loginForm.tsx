import React from "react";
import { RootState } from "../../store";
import {
  removeUserFromLoginInfo,
  addUserToLoginInfo,
} from "../../store/user/actionts";
import { User } from "../../store/user/types";
import { Button, Form, Grid } from "semantic-ui-react";
import { connect } from "react-redux";

export interface ILoginInfoProps {
  removeUserFromLoginInfo: typeof removeUserFromLoginInfo;
  addUserToLoginInfo: typeof addUserToLoginInfo;
  users: User[];
}

export class LoginInfo extends React.Component<ILoginInfoProps> {
  newProduct = (event: any) => {
    event.preventDefault();
    const formField: HTMLInputElement | null = document.querySelector(
      '[placeholder="user-name" ]'
    );
    let formFieldValue: string = "";
    if (formField !== null) formFieldValue = formField.value;

    this.props.addUserToLoginInfo({
      username: formFieldValue,
      password: formFieldValue,
    });
  };
  deleteProduct = (username: string) => {
    this.props.removeUserFromLoginInfo(username);
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.newProduct}>
            <Form.Field>
              <label htmlFor="user-name">User Name</label>
              <input placeholder="user-name" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button type="submit">Log In</Button>
          </Form>
        </Grid.Row>
        <ul>
          {this.props.users.map((element) => (
            <li>{element.username}</li>
          ))}
        </ul>
      </Grid>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps, {
  addUserToLoginInfo,
  removeUserFromLoginInfo,
})(LoginInfo);
