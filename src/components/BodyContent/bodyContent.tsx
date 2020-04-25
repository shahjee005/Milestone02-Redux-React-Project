import * as React from 'react';
import { Grid } from 'semantic-ui-react';

export interface IMainPageProps {
}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <Grid>
        <Grid.Column>
          <React.Fragment>
            <h1>Hello World!!!!!</h1>

          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}
