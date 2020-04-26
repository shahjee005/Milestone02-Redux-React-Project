import { Component, Fragment } from "react";
import React from "react";
import { RootState } from "../../store";
import { connect } from 'react-redux';
import { Button, Grid } from "semantic-ui-react";
import { addBlogPosts } from "../../store/blogPost/actions";
import { BlogPost } from "../../store/blogPost/types";


export interface IMovieBlogListOutputProps {
  blogPosts: BlogPost[];
}

export class MovieBlogListOutput extends Component<IMovieBlogListOutputProps> {

  public render() {
    const { blogPosts } = this.props
    return (
      <Grid centered>
        <Grid.Column >
          {blogPosts.length > 0 ?
            blogPosts.map(individualBlogPost => {
              return <li key={individualBlogPost.id} >{individualBlogPost.blogPostDetail}</li>
            })
            :
            <p></p>
          }
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    // blogposts: state.BlogPost,
    blogPosts: state.BlogPost.blogPosts,
  };
}

export default connect(
  mapStateToProps,
  { addBlogPosts }
)(MovieBlogListOutput); 