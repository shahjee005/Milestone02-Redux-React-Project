import * as React from "react";
import { Formik } from "formik";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { User } from "../../store/users/types";
import { logInUserFromSystem } from "../../store/login/actions";
import { withRouter } from "react-router-dom";

export interface ILoginButtonNavbarProps {
  users: User[];
  logInUserFromSystem: typeof logInUserFromSystem;
  history: any;
}

export interface ILoginButtonNavbarState {
  isUserFormInvalid: boolean;
}

export interface UserNameAndPasswordCombo {
  username: string;
  password: string;
}

export class LoginButtonNavbar extends React.Component<
  ILoginButtonNavbarProps,
  ILoginButtonNavbarState
> {
  constructor(props: ILoginButtonNavbarProps) {
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
        isUserFormInvalid: true,
      });
    } else {
      this.setState({
        isUserFormInvalid: false,
      });
      this.props.history.push("/");
    }
  };

  public render() {
    return (
      <Formik
        initialValues={{
          username: "string",
          password: "string",
        }}
        onSubmit={(data: UserNameAndPasswordCombo) => {
          this.validateCredentials(data);
          this.props.history.push("/");
        }}
      ></Formik>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    users: state.users.users,
  };
};

export default withRouter(
  connect(mapStateToProps, { logInUserFromSystem })(LoginButtonNavbar)
);
