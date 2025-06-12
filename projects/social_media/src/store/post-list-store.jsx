import { createContext } from "react";
import { useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},

});

const postListReducer = (currPostList , action) => {
  return currPostList;
}
const PostListProvider = ({children}) => {
const [postList ,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST); 

const addPost =() => {

}

const deletePost = () => {

}

return (<PostList.Provider value={{
  postList,
  addPost,
  deletePost,
}}>{children}
</PostList.Provider>
);
};

const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'going to chandigarh',
  body: 'hi friends , i am going to chandigarh for my vacation . hope to enjoy a lot. Peace out',
  reaction: 80,
  userId: "user-9",
  tags:['vacation','chandigarh','enjoy']
},
{
  id: '2',
  title: 'Pass ho gye',
  body: '4 saal ki masti k baad bhi hogye pass. hard to believe',
  reaction: 23,
  userId: "user-12",
  tags:['graduate','unbeleavable']
},
];


export default PostListProvider;