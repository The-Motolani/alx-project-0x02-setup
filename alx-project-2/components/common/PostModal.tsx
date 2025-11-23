import { useState } from "react";

const PostModal = ({ onSubmit, onClose }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">New Post</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={() => {
            onSubmit({ title, content });
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostModal;
