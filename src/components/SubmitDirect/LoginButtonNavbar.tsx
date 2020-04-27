import * as React from "react";
// import { Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import { logOutUserFromSystem } from "../../store/login/actions";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { User } from "../../store/users/types";
import { logInUserFromSystem } from "../../store/login/actions";

export interface ILoginButtonNavbarProps {
  users: User[];
  logInUserFromSystem: typeof logInUserFromSystem;
  // loggedInUserId: number;
  // logOutUserFromSystem: typeof logOutUserFromSystem;
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
        isUserFormInvalid: false,
      });
    } else {
      this.setState({
        isUserFormInvalid: true,
      });
      return (window.location.href = "/movielist");
    }
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps, { logInUserFromSystem })(
  LoginButtonNavbar
);
