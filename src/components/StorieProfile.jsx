export default function StorieProfile({ name, time, tu }) {
  return (
    <div
      className={
        tu === "true"
          ? "flex items-center  cursor-pointer p-4"
          : "hover:bg-gray-200 flex items-center cursor-pointer p-4"
      }
    >
      <div className="h-12 w-12 border-2 border-black rounded-full mr-4 "></div>
      <div className="flex-grow">
        <div>{name}</div>
        <div>{time}</div>
      </div>
      {tu === "true" ? (
        <button className="cursor-pointer focus:outline-none">
          <img className="w-8 h-8" src="/icons/configuraciones.svg" alt="" />
        </button>
      ) : null}
    </div>
  );
}
