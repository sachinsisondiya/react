import Post from "./Post"; 
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList=()=>{
  const {postList}=useContext(PostListData);

  const handleGetPostClick = () => {
   console.log("get posts clicked")
  };
  return (<>
  {postList.length ===0 && <WelcomeMessage
  onGetPostClick={handleGetPostClick}/>}

 // 12:04
  {postList.map((post)=> (<Post key={post.id} post={post}/>
))}
  
  </>
  );
}
export default PostList;