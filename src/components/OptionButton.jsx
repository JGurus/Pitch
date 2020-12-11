export default function OptionButton({ title, imagen, invert }) {
  return invert === "false" ? (
    <button className="flex items-center hover:bg-gray-200 w-full p-4 cursor-pointer">
      <img src={"/icons/" + imagen + ".svg"} alt="" className="w-8 mr-4" />
      {title}
    </button>
  ) : (
    <button className="flex justify-end items-center hover:bg-gray-200 w-full p-4 cursor-pointer">
      {title}
      <img src={"/icons/" + imagen + ".svg"} alt="" className="w-8 ml-4" />
    </button>
  );
}
