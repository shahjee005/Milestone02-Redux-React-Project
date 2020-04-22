import { BlogPostList, ADD_BLOG_POST_TO_LIST } from './types';

//Lets define Interfaces for our Blogposts(Model types)

export interface BlogPost {
    id: number
    blogPostDetails: string  
}

// Action Types Definitions .
export const ADD_BLOG_POST_TO_LIST= "ADD_BLOG_POST_TO_LIST";
export const ADD_USER_NAME_WITH_BLOGPOST= "ADD_USER_NAME_WITH_BLOGPOST";

// Interface for Blogpostlist state 
export interface BlogPostListState {
    BlogPostList: BlogPost []
}

// Actions Definitions 
interface AddBlogPostToList {
    type : typeof ADD_BLOG_POST_TO_LIST;
    payload: string;

} 

interface AddUsernameWithBlogPost {
    type : typeof ADD_USER_NAME_WITH_BLOGPOST;
    payload: string;

}
export type BlogPostActionTypes = AddBlogPostToList | AddUsernameWithBlogPost;





