import { PostProps } from "../../interfaces";

const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
