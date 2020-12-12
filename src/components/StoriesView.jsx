import StorieProfile from "./StorieProfile";
import { Link } from "react-router-dom";
export default function StoriesView() {
  return (
    <div className="max-h-screen flex">
      <div className="w-1/5 h-screen">
        <Link to="/home">
          <button className="bg-gray-500 rounded-full p-1 ml-4 mt-4 focus:outline-none">
            <img className="h-6 w-6" src="/icons/cerrar.svg" alt="" />
          </button>
        </Link>
        <div className="mt-4">
          <StorieProfile name="The BeatVoices" time="11h" tu="true" />
          <hr />
          <StorieProfile name="Jordan Jaramillo" time="1h" tu="false" />
          <StorieProfile name="Joel Gurumendi" time="25min" tu="false" />
        </div>
      </div>
      <div className="w-4/5 h-screen bg-black flex justify-center items-center">
        <div
          className="bg-gray-500 rounded"
          style={{ height: "610px", width: "280px" }}
        >
          <div className="h-2 rounded-full w-11/12 mx-auto bg-white mt-5"></div>
          <button className="ml-auto mr-4 mt-2 block cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="2" fill="white" />
              <circle cx="4" cy="12" r="2" fill="white" />
              <circle cx="20" cy="12" r="2" fill="white" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-10 mx-auto rounded-full bg-white p-2 w-1/5 flex items-center">
          <input
            placeholder="Responder..."
            type="text"
            className="text-black placeholder-black flex-grow focus:outline-none"
          />
          <button className="focus:outline-none">
            <img src="/icons/sonrisa.svg" className="w-6" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
