import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

import "./Posts.css";

function Posts() {

  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) =>
        console.log("Error fetching posts:", error)
      );
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="posts-container">
      
      <h1 className="posts-title">Posts</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <div className="post-card">
              
              <h3>{post.title}</h3>

              <p>
                {post.body.substring(0, 100)}...
              </p>

              <Link
                to={`/posts/${post.id}`}
                className="post-link"
              >
                Read More
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Posts;
