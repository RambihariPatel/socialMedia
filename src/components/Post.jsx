import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";


const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card">

        <div className="card-body">
          <h5 className="card-title">
            {post.title}

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete onClick={() => deletePost(post.id)} style={{cursor: "pointer"}}/>
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>

          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">
              {tag}
            </span>
          ))}
        </div>

        <div className="alert alert-danger reaction" role="alert">
          This Post has been reacted by {post.reaction} Peoples..
        </div>
      </div>
    </>
  );
};

export default Post;
