import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {

      const {addPost} = useContext(PostList)

      const userIdElement = useRef();

      const postTitleElement = useRef();

      const postBodyElement = useRef();

      const reactionElement = useRef();

      const tagsElement = useRef();

      const handleSubmit = (event) => {

        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reaction = reactionElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionElement.current.value = "";
        tagsElement.current.value = ""; 
   
        
        addPost(userId, postTitle, postBody, reaction, tags);
      };


  return (
      
    <>
      <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>

          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter your User ID here .."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>

          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feel Today .."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>

          <textarea
            rows="4"
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="body"
            placeholder="Tell us more about it!!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number Of Reactions
          </label>

          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reaction"
            placeholder="How many People reacted to this Post."
          />
        </div>


        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>

          <input
            type="tags"
            className="form-control"
            id="title"
            ref={tagsElement}
            placeholder="Please Enter tags using Space"
          />
        </div>



        

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
