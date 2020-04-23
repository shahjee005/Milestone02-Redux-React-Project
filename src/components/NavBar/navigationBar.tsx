import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export interface IMenuNavBarProps {}

export interface IMenuNavBarState {
  activeItem: string;
}

export default class MenuNavBar extends Component<
  IMenuNavBarProps,
  IMenuNavBarState
> {
  constructor(props: IMenuNavBarProps) {
    super(props);
    this.state = {
      activeItem: "home",
    };
  }

  private handleItemClick = () => {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="movielist"
          active={activeItem === "movielist"}
          onClick={() => this.handleItemClick}
        >
          Movie List
        </Menu.Item>

        <Menu.Item
          name="aboutus"
          active={activeItem === "aboutus"}
          onClick={() => this.handleItemClick}
        >
          About US
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={() => this.handleItemClick}
          >
            Log IN
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
