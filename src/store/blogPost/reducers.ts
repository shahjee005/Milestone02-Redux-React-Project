import {
  BlogPostsState,
  BlogPostActionTypes,
  ADD_BLOG_POST_TO_LIST,
} from "./types";

//sting the initial state for my BlogPost list
const initialState: BlogPostsState = {
  blogPosts: [
    {
      id: 1,
      blogPostDetail: "The Matrix. The best ever movie i have seen so far  ",
    },
    {
      id: 2,
      blogPostDetail: " Forrest Gump. I will never see this agin ",
    },
  ],
  NextId: 3,
};

//Reducer setup
export function blogPostReducer(
  state = initialState,
  action: BlogPostActionTypes
): BlogPostsState {
  switch (action.type) {
    case ADD_BLOG_POST_TO_LIST:
      let newId = state.NextId;
      let newNextId = newId + 1;
      let newBlogPost = { id: newId, blogPostDetail: action.payload };
      return {
        ...state,
        blogPosts: [...state.blogPosts, newBlogPost],
        NextId: newNextId,
      };

    default:
      return state;
  }
}
