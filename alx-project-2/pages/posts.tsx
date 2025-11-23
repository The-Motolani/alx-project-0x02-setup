import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";


export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)));
  }, []);
  
    return (
    <>
    <Header />
    <div className="p-10">
      <h1 className="text-xl font-bold">Posts</h1>
    <div className="grid gap-4">
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
    </>
  );
}
