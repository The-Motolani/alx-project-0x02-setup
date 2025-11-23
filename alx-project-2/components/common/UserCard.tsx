import { UserProps } from "../../interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{name}</h2>
      <p>{email}</p>
      <small>{address.street}, {address.city}</small>
    </div>
  );
};

export default UserCard;
