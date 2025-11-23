import Card from "../components/common/Card";
import { useState } from "react";
import PostModal from "../components/common/PostModal";
import Header from "../components/layout/Header";


export default function HomePage() {
    const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  const addPost = (post: any) => {
    setPosts([...posts, post]);
  };

  return (
    <>
    <Header />
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <Card title="Card One" content="This is the first card." />
      <Card title="Card Two" content="This is the second card." /> 
      <button
        className="bg-green-600 text-white p-3 rounded"
        onClick={() => setModalOpen(true)}
      >
        Add Post
      </button>
      {modalOpen && (
        <PostModal
          onSubmit={addPost}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="mt-6">
        {posts.map((p, i) => (
          <div key={i} className="border p-4 mb-2 rounded">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
