import { BlogPost, BlogPostsState } from './blogPost/types';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogPostReducer } from './blogPost/reducers';


//Combine Reducers 
const rootReducer = combineReducers({
    BlogPost: blogPostReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Redux Store having actions & reducers!!!
export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );
    return store;
}