import * as React from "react";
import { Grid } from "semantic-ui-react";

export interface IAboutUsProps {}

export default class AboutUs extends React.Component<IAboutUsProps> {
  public render() {
    return (
      <Grid>
        <Grid.Column>
          <React.Fragment>
            <div className=" main-content">
              <h1>ABOUT US</h1>
              <Grid.Row text-align="left">
                <ul>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    perspiciatis facere provident vitae repellendus dolores ut
                    quos laboriosam beatae deleniti ex, eveniet ratione aliquid
                    soluta, libero quae quibusdam nulla iure.
                  </h4>

                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    perspiciatis facere provident vitae repellendus dolores ut
                    quos laboriosam beatae deleniti ex, eveniet ratione aliquid
                    soluta, libero quae quibusdam nulla iure.
                  </h4>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    perspiciatis facere provident vitae repellendus dolores ut
                    quos laboriosam beatae deleniti ex, eveniet ratione aliquid
                    soluta, libero quae quibusdam nulla iure.
                  </h4>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt, quisquam architecto aliquam ut aliquid ducimus
                    consequatur atque sed, aspernatur doloribus dolorem veniam
                    officia impedit, nulla doloremque accusantium dicta tempora
                    velit laudantium quia! Corrupti, et iusto?
                  </h4>
                </ul>
              </Grid.Row>
            </div>
            {/* <Divider> </Divider> */}
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}
