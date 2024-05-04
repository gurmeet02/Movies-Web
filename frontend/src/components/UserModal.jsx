import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";
import { useContext } from "react";

const UserModal = () => {
  const user = useContext(UserContext);
  return (
    <main className="px-4 py-3 backdrop-filter backdrop-blur-2xl bg-secondary bg-opacity-70 shadow-lg rounded-lg">
      <h6 className="text-gray tracking-wider font-semibold pb-5">
        {user.name ? user.name : "hello"}
      </h6>
      <Link
        to="/user-list"
        className="text-lg font-semibold text-gray flex justify-between items-center"
      >
        My List <i class="bx bx-chevron-right text-2xl"></i>
      </Link>
    </main>
  );
};

export default UserModal;
