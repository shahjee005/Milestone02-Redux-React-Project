
// Interface for Blogpostlist state 
export interface BlogPostsState {
    blogPosts: BlogPost[] 
    NextId:number   //?//

}

//Lets define Interfaces for our Blogposts(Model types)

export interface BlogPost {
    id: number
    blogPostDetail: string
}

//Definations of the actions .
export const ADD_BLOG_POST_TO_LIST = "ADD_BLOG_POST_TO_LIST";
// export const SHOW_MOVIE_DEATILS = "SHOW_MOVIE_DEATILS";

interface AddBlogPostToList {
    type: typeof ADD_BLOG_POST_TO_LIST;
    payload: string;

}
// interface RemovePost {
//     type: typeof REMOVE_POST;
//     payload: any;
// }

export type BlogPostActionTypes = AddBlogPostToList;





