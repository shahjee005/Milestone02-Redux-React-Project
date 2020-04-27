import * as React from "react";
import { Grid, Button, Input } from "semantic-ui-react";
import { Formik, Form, Field } from "formik";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { User } from "../../store/users/types";
import { logInUserFromSystem } from "../../store/login/actions";
import { withRouter } from "react-router-dom";

export interface ILoginPageProps {
  users: User[];
  logInUserFromSystem: typeof logInUserFromSystem;
  history: any;
}

export interface ILoginPageState {
  isUserFormInvalid: boolean;
}

export interface UserNameAndPasswordCombo {
  username: string;
  password: string;
}
export class LoginPage extends React.Component<
  ILoginPageProps,
  ILoginPageState
> {
  constructor(props: ILoginPageProps) {
    super(props);

    this.state = {
      isUserFormInvalid: false,
    };
  }

  private validateCredentials = (data: UserNameAndPasswordCombo) => {
    let { logInUserFromSystem, users } = this.props;

    let singleUser = users.filter((individualUser) => {
      return (
        individualUser.password === data.password &&
        individualUser.username === data.username
      );
    })[0];
    if (singleUser) {
      logInUserFromSystem(singleUser.id);
      this.setState({
        isUserFormInvalid: false,
      });
    } else {
      this.setState({
        isUserFormInvalid: true,
      });
    }
  };
  public render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <h1>Login</h1>
          </Grid.Row>
          <Grid.Row>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(data: UserNameAndPasswordCombo) => {
                this.validateCredentials(data);
                this.props.history.push("/");
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div>
                    <h3>Username: </h3>
                    <Field
                      placeholder="username"
                      name="username"
                      type="input"
                      content="usernameContent"
                      as={Input}
                    />
                  </div>
                  <div>
                    {this.state.isUserFormInvalid}
                    <h3>Password: </h3>
                    <Field
                      placeholder="password"
                      name="password"
                      content="passwordCtrlVCodeContent"
                      type="input"
                      as={Input}
                    />
                    {this.state.isUserFormInvalid && (
                      <h4>Invalid username or password</h4>
                    )}
                  </div>
                  <Grid.Column style={{ "margin-top": "16px" }}>
                    <Button type="submit" color="blue">
                      Submit
                    </Button>
                  </Grid.Column>
                </Form>
              )}
            </Formik>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.users.users,
  };
};

export default withRouter(
  connect(mapStateToProps, { logInUserFromSystem })(LoginPage)
);
