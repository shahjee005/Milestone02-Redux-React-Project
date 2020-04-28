
// Interface for Blogpostlist state 
export interface BlogPostsState {
    blogPosts: BlogPost[]
    NextId: number

}
//Lets define Interfaces for our Blogposts(Model types)

export interface BlogPost {
    id: number
    blogPostDetail: string
}

//Definations of the actions .
export const ADD_BLOG_POST_TO_LIST = "ADD_BLOG_POST_TO_LIST";

interface AddBlogPostToList {
    type: typeof ADD_BLOG_POST_TO_LIST;
    payload: string;

}

export type BlogPostActionTypes = AddBlogPostToList;





