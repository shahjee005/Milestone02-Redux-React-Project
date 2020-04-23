import * as React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export interface IBodyProps {
}
// this was taken from semantic ui react
export default class Body extends React.Component<IBodyProps> {
  public render() {
    return (
      <div>
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column width={4}>
                    < Image src='https://m.media-amazon.com/images/M/MV5BMmM4YzJjZGMtNjQxMy00NjdlLWJjYTItZWZkYzdhOTdhNzFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            Title:
                        </Grid.Column>
                        <Grid.Column width={6}>
                            American Hustle
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            Year:
                        </Grid.Column>
                        <Grid.Column width={6}>
                            2010
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            Genre:
                        </Grid.Column>
                        <Grid.Column width={6}>
                            Adventure
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            IMDB:
                        </Grid.Column>
                        <Grid.Column width={6}>
                            Adventure
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column width={16}>
                <h2>Movie Summary</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices vehicula consequat. Aenean sit amet hendrerit nisl. Maecenas vitae erat sem. Fusce cursus bibendum sodales. Maecenas ut enim quis arcu lacinia vulputate. Aliquam elementum, nisl et bibendum porttitor, velit augue fringilla augue, et facilisis lacus mi non elit.
                </p>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}
