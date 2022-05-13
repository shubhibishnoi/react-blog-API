import axios from "axios";
import React from "react";

import Post from "./Post";

const baseURL = "https://logibricks.com/api/blogCategories";

function CreatePost(post){
  return (
    <Post
      key = {post.id}
      image = {post.image}
      title = {post.title}
    />
  );
}

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      {post.map(CreatePost)}
    </div>
  );
}
