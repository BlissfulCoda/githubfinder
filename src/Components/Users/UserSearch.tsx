import React, { useState, useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import Button from "../Shared/Button";
import GithubContext from "../../Context/Github/GithubContextData";

import { GithubContextDataInterface } from "../../Context/Github/GithubContextData";

export default function UserSearch(): JSX.Element {
  const [text, setText] = useState<string>("");

  const { users, searchUsers, clearUsers } = useContext(
    GithubContext
  ) as GithubContextDataInterface;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSearch = () => {
    toast.error("clicked....");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      toast.error("Enter something!");
    } else {
      searchUsers(text);
    }
    setText(" ");
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        {users.length > 0 ? (
          <div className="flex space-x-1 ">
            <span className="text-white opacity-60 text-sm ">clear</span>
            <Button>
              <FaTimes
                className="text-slate-500 text-sm"
                onClick={clearUsers}
              />
            </Button>
          </div>
        ) : (
          <>
            <input
              type="text"
              className="bg-black border border-x-0 border-t-0 focus:outline-none border-b-zinc-500 text-neutral-content placeholder:text-[9px] text-base focus:placeholder:text-[7px] text-white"
              placeholder="Search a user..."
              onChange={handleChange}
              value={text}
            />
            <Button>
              <FaSearch
                className="text-slate-500 text-xs"
                onClick={handleSearch}
              />
            </Button>
          </>
        )}
      </form>
    </div>
  );
}
