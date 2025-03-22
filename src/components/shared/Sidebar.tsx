import Link from "next/link";
import { FaEnvelope, FaHome, FaPencilAlt} from "react-icons/fa";
import {FaBriefcase,FaUserGroup} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects/manage/"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBriefcase className="h-5 w-5" />
            <span>Manage Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs/manage"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaPencilAlt className="h-5 w-5" />
            <span>Manage Blogs</span>
          </Link>
        </li>
        <li>
          <Link
              href="/dashboard/blogs/create"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaEnvelope className="h-5 w-5" />
            <span>Manage Messages</span>
          </Link>
        </li>
        <li>
          <Link
              href="/dashboard/blogs/create"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaUserGroup className="h-5 w-5" />
            <span>Manage Users</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
