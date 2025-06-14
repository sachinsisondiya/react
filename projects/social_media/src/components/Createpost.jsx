import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function Createpost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const raectionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = raectionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    raectionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
  
        title: postTitle,
        body: postBody,
        reaction:reactions,
        userId:userId,
        tags: tags,
      
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));

  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlfor="userId" class="form-label">
            Enter your Id
          </label>
          <input
            type="text"
            class="form-control"
            id="userId"
            ref={userIdElement}
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
            ref={postTitleElement}
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
            ref={postBodyElement}
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
            ref={raectionsElement}
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
            ref={tagsElement}
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default Createpost;
