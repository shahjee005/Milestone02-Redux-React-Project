import { BlogPostActionTypes, ADD_BLOG_POST_TO_LIST } from "./types";



//Add Blog posts from listed function 
export function addBlogPosts(blogPosts: string): BlogPostActionTypes {
    return {
        type: ADD_BLOG_POST_TO_LIST,
        payload: blogPosts
    }

}
