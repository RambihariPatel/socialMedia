
import { children, createContext, useReducer } from "react";



export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},

});


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList 
}

const PostListProvider = ({children}) => {

        
        const [postList, despatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

        const addPost = (userId, postTitle, postBody, reaction, tags) => {
            
            despatchPostList({
               type: 'ADD_POST',
               payload:{
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reaction,
                userId:'user-9',
                tags: tags,
               }
            })
        }
        const deletePost = (postId) => {

            despatchPostList({
                type:'DELETE_POST',

                payload:{
                    postId,
                },
            })
        }

        return(
            <PostList.Provider value={{postList, addPost, deletePost}}>
                {children}
            </PostList.Provider>
        )

    
    

}    

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'Hi Friend, I am going to Mumbai for my vacations, Hope to enjoy a lot. Peace out.',
        reaction: 2,
        userId:'user-9',
        tags: ['vacations', 'Mumbai', 'Enjoying'],
    },

    {
        id: '2',
        title: 'Pass Ho Gaya Bhai',
        body: 'Bina Pade Pass kar li Engineering',
        reaction: 15,
        userId:'user-12',
        tags: ['Graduating', 'Unbelievable', 'Engineer'],
    },

]

export default PostListProvider;