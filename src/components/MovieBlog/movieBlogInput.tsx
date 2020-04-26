import { Component, Fragment } from "react";
import { Input, Button, Grid } from 'semantic-ui-react';
import React from "react";
import { RootState } from "../../store";
import { connect } from 'react-redux';
import { addBlogPosts } from "../../store/blogPost/actions";
import {Button1} from "./submitButton";



export interface IMovieBlogInputProps {
  addBlogPosts: typeof addBlogPosts;



}
interface IMovieBlogInputState {
  newBlogPosts: string;
}

export class MovieBlogInput extends Component<IMovieBlogInputProps, IMovieBlogInputState> {

  constructor(props: IMovieBlogInputProps) {
    super(props);
    this.state = {
      newBlogPosts: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ newBlogPosts: event.currentTarget.value })
  }

  onClickAddBlogPost(newBlogPostDetail: string) {
    if (newBlogPostDetail !== '') {
      this.props.addBlogPosts(newBlogPostDetail);
    }
  }

  public render() {
    const { newBlogPosts } = this.state;
    return (
      <Fragment>
        <Grid.Row>
       
     
    
        <Input size='big' placeholder = 'Type your coments here....'onChange={this.onUserFieldChange} />
        <Button size='big' color='facebook' content='Submit' onClick={() => this.onClickAddBlogPost(newBlogPosts)} />
        </Grid.Row>
      </Fragment>
      
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    blogPosts: state.BlogPost.blogPosts
  }
}

export default connect(
  mapStateToProps,
  { addBlogPosts }
)(MovieBlogInput);