import { Link } from "react-router-dom";
export default function Post({ user, id }) {
  return (
    <div className="flex flex-col px-4 py-2 border-b border-black mb-4">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 border border-black rounded-full bg-purple-400 mr-5"></div>
        <div className="flex flex-col">
          <p>{user}</p>
          <p>Guayaquil 1h</p>
        </div>
      </div>
      <Link to={"/post/" + id}>
        <div className="w-full cursor-pointer h-72 bg-gray-300"></div>
      </Link>
      <div className="flex justify-between">
        <button className="py-2 mx-auto">
          {" "}
          <img className="w-8 mx-auto" src="/icons/corazon.svg" alt="" />
        </button>
        <button className="py-2 mx-auto">
          {" "}
          <img className="w-8 mx-auto" src="/icons/comentario.svg" alt="" />
        </button>
        <button className="py-2 mx-auto">
          {" "}
          <img className="w-8 mx-auto" src="/icons/compartir.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
