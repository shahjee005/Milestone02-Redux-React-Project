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
      activeItem: "movielist",
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
            name="movielist"
            active={activeItem === "movielist"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("movielist")}
          >
            Movie List
          </Menu.Item>
          <Menu.Item
            name="aboutus"
            active={activeItem === "aboutus"}
            as={Link}
            to={"/aboutus"}
            onClick={() => this.changeActiveItem("aboutus")}
          >
            About US
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="log out"
              active={activeItem === "logout"}
              as={Link}
              onClick={() => this.props.logOutUserFromSystem()}
            >
              Log Out
            </Menu.Item>
          </Menu.Menu>
        </React.Fragment>
      );
    } else {
      shownMenuItems = (
        <React.Fragment>
          <Menu.Item
            name="movielist"
            active={activeItem === "movielist"}
            as={Link}
            to={"/"}
            onClick={() => this.changeActiveItem("movielist")}
          >
            Movie List
          </Menu.Item>
          <Menu.Item
            name="aboutus"
            active={activeItem === "aboutus"}
            as={Link}
            to={"/aboutus"}
            onClick={() => this.changeActiveItem("aboutus")}
          >
            About US
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              as={Link}
              to={"/login"}
              onClick={() => this.changeActiveItem("login")}
            >
              Login
            </Menu.Item>
          </Menu.Menu>
        </React.Fragment>
      );
    }

    return (
      <Menu inverted style={{ backgroundColor: "blue" }}>
        {shownMenuItems}
      </Menu>
    );
  }

  componentDidUpdate() {}
}
const mapStateToProps = (state: RootState) => {
  return {
    loggedInUserId: state.login.loggedInUserId,
  };
};

export default connect(mapStateToProps, { logOutUserFromSystem })(NavBar);
