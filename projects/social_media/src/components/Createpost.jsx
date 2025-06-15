import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form , redirect} from "react-router-dom";

function Createpost() {
 // const { addPost } = useContext(PostList);
 

 


  return (
    <>
      <Form method="POST" className="create-post" >
        <div class="mb-3">
          <label htmlfor="userId" class="form-label">
            Enter your Id
          </label>
          <input
            type="text"
            class="form-control"
            id="userId"
            name="userId"
            placeholder="your user Id"
          />
        </div>
        <div class="mb-3">
          <label htmlfor="title" class="form-label">
            POST TITLE
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            placeholder="how are you feeling today"
          />
        </div>
        <div class="mb-3">
          <label htmlfor="body" class="form-label">
            POST CONTENT
          </label>
          <textarea
            type="text"
            rows="4"
            class="form-control"
            id="title"
             name="body"
            placeholder="what is in your mind"
          />
        </div>
        <div class="mb-3">
          <label htmlfor="reactions" class="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            class="form-control"
            id="reactions"
             name="raections"
            placeholder="how many people reacted to this post"
          />
        </div>

        <div class="mb-3">
          <label htmlfor="tags" class="form-label">
            enter your hashtag here
          </label>
          <input
            type="text"
            class="form-control"
            id="tag"
             name="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
}

export async function createPostAction(data) {
  const fromdata = await data.request.formData()

  const postData = Object.fromEntries(fromdata);

  postData.tags= postData.tags.split(" ");


    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringfy(postData),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
      });


      return redirect ("/");
     

}
export default Createpost;
