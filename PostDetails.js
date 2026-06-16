import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;