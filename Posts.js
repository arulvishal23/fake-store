import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

import "./Posts.css";

function Posts() {
  // State for storing posts
  const [posts, setPosts] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // Fetch posts from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) =>
        console.log("Error fetching posts:", error)
      );
  }, []);

  // Filter posts based on search
  const filteredPosts = posts.filter((post) =>
    post.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="posts-container">
      {/* Page Title */}
      <h1 className="posts-title">Posts</h1>

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Posts Grid */}
      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <div className="post-card">
              {/* Post Title */}
              <h3>{post.title}</h3>

              {/* Post Description */}
              <p>
                {post.body.substring(0, 100)}...
              </p>

              {/* Details Link */}
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