import { CardProps } from "../../interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
