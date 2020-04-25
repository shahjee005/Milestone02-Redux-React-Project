import { Component, Fragment } from "react";
import { Input, Button } from 'semantic-ui-react';
import React from "react";
import { RootState } from "../../store";
import { connect } from 'react-redux';
import { addBlogPosts } from "../../store/blogPost/actions";



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
        newBlogPosts:''
      }
    }
  
    private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState( { newBlogPosts: event.currentTarget.value} )
    }
  
    onClickAddBlogPost(newBlogPostDetail: string) {
      if (newBlogPostDetail !== '' ) {
      this.props.addBlogPosts(newBlogPostDetail);
      }
    }
  
    public render() {
      const { newBlogPosts } = this.state;
      return (
        <Fragment>
          <h2>New BlogPost:</h2>
          <Input onChange={this.onUserFieldChange} />
          <Button color= 'facebook' content = 'Add' onClick={() => this.onClickAddBlogPost(newBlogPosts)} />              
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
    { addBlogPosts}
  )(MovieBlogInput);