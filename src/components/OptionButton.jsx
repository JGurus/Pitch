import { Link } from "react-router-dom";
export default function OptionButton({ title, imagen, invert, ruta }) {
  return invert === "false" ? (
    <Link to={ruta}>
      <button className="flex items-center hover:bg-gray-200 focus:outline-none w-full p-4 cursor-pointer">
        <img src={"/icons/" + imagen + ".svg"} alt="" className="w-8 mr-4" />
        {title}
      </button>
    </Link>
  ) : (
    <button className="flex justify-end items-center hover:bg-gray-200 w-full p-4 cursor-pointer">
      {title}
      <img src={"/icons/" + imagen + ".svg"} alt="" className="w-8 ml-4" />
    </button>
  );
}
