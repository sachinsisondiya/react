import { createContext } from "react";
import { useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now() ,
        title: postTitle,
        body: postBody,
        reaction:reactions,
        userId:userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to chandigarh",
    body: "hi friends , i am going to chandigarh for my vacation . hope to enjoy a lot. Peace out",
    reaction: 80,
    userId: "user-9",
    tags: ["vacation", "chandigarh", "enjoy"],
  },
  {
    id: "2",
    title: "Pass ho gye",
    body: "4 saal ki masti k baad bhi hogye pass. hard to believe",
    reaction: 23,
    userId: "user-12",
    tags: ["graduate", "unbeleavable"],
  },
];

export default PostListProvider;
