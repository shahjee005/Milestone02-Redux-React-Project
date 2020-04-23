import * as React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export interface IBodyProps {
}

export default class Body extends React.Component<IBodyProps> {
  public render() {
    return (
      <div>
        <Grid celled='internally'>
            <Grid.Row>
            <Grid.Column width={3}>
                < Image src='https://m.media-amazon.com/images/M/MV5BMmM4YzJjZGMtNjQxMy00NjdlLWJjYTItZWZkYzdhOTdhNzFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' />
            </Grid.Column>
            <Grid.Column width={10}>
                < Image src='../../images/img_AmericanHustle.jpg' />
            </Grid.Column>
            <Grid.Column width={3}>
                <p>
                    Lorem ipsum..kjllkjdsfjkldfsjklfdsjkldfs
                </p>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column width={3}>
            <p>
                another card
            </p>
            </Grid.Column>
            <Grid.Column width={10}>
            < Image src='../../images/img_ForestGump.jpg' />
            </Grid.Column>
            <Grid.Column width={3}>
            < Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}
