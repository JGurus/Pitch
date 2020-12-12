import Storie from "./Storie";
import { Link } from "react-router-dom";
export default function ListStories() {
  return (
    <div className="flex items-center mx-auto justify-center py-4 border-b border-black">
      <Link to="/stories/32656">
        <Storie />
      </Link>
      <Link to="/stories/32656">
        <Storie />
      </Link>
      <Link to="/stories/32656">
        <Storie />
      </Link>
      <Link to="/stories/32656">
        <Storie />
      </Link>
      <Link to="/stories/32656">
        <Storie />
      </Link>
      <Link to="/stories/32656">
        <Storie />
      </Link>
    </div>
  );
}
