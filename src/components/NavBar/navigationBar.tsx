import * as React from 'react';
import { Button } from 'semantic-ui-react'

export interface INavigationBarProps {
}

export default class NavigationBar extends React.Component<INavigationBarProps> {
  public render() {
    return (
      <div>

  <Button.Group>
    <Button>nav</Button>
    <Button>bar</Button>
    <Button>stub</Button>
  </Button.Group>
      </div>
    );
  }
}
