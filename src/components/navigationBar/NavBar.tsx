import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logOutUserFromSystem } from "../../store/login/actions";
import { RootState } from "../../store";
import { connect } from "react-redux";
export interface INavBarProps {
  loggedInUserId: number;
  logOutUserFromSystem: typeof logOutUserFromSystem;
}

export interface INavBarState {
  activeItem: string;
}

export class NavBar extends React.Component<INavBarProps, INavBarState> {
  constructor(props: INavBarProps) {
    super(props);

    this.state = {
      activeItem: "home",
    };
  }
  private changeActiveItem = (activeItem: string) => {
    this.setState({
      activeItem: activeItem,
    });
  };

  private logOutOnClick = () => {
    logOutUserFromSystem();
  };

  public render() {
    let { activeItem } = this.state;
    let { loggedInUserId } = this.props;

    let shownMenuItems;

    console.log(loggedInUserId);

    if (loggedInUserId > 0) {
      shownMenuItems = (
        <React.Fragment>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("home")}
          >
            Movie List
          </Menu.Item>
          <Menu.Item
            name="aboutus"
            active={activeItem === "aboutus"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("aboutus")}
          >
            About US
          </Menu.Item>
          <Menu.Item
            name="log out"
            active={activeItem === "logout"}
            as={Link}
            onClick={() => this.props.logOutUserFromSystem()}
          >
            Log Out
          </Menu.Item>
        </React.Fragment>
      );
    } else {
      shownMenuItems = (
        <React.Fragment>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("home")}
          >
            Movie List
          </Menu.Item>
          <Menu.Item
            name="aboutus"
            active={activeItem === "aboutus"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("aboutus")}
          >
            About US
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            as={Link}
            to={"/login"}
            onClick={() => this.changeActiveItem("login")}
          >
            Login
          </Menu.Item>
        </React.Fragment>
      );
    }

    return <Menu inverted>{shownMenuItems}</Menu>;
  }

  componentDidUpdate() {
    // console.log("fG8MIlcxkEAGC8/d9haLXXL9m+qDwprLnr0pNz1dT14=");
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    loggedInUserId: state.login.loggedInUserId,
  };
};

export default connect(mapStateToProps, { logOutUserFromSystem })(NavBar);
