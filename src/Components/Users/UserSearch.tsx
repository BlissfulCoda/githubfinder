import React, { useState, useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Button from "../Shared/Button";
import GithubContext from "../../Context/Github/GithubContextData";
import { GithubContextDataInterface } from "../../Data/GithubContextData";

export default function UserSearch(): JSX.Element {
  const [text, setText] = useState<string>("");
  const [textLength, setTextLength] = useState<boolean>(false);

  const { users } = useContext(GithubContext) as GithubContextDataInterface;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      alert("Enter something!");
    } else {
    }

    setText(" ");
  };

  return (
    <div>
      <form action="" className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-black border border-x-0 border-t-0 focus:outline-none border-b-zinc-500 text-neutral-content placeholder:text-[9px] text-xs focus:placeholder:text-[7px] "
          placeholder="Search a user..."
          onChange={handleChange}
          value={text}
        />
        <Button>
          {users.length > 0 ? (
            <FaTimes className="text-slate-500 text-xs" />
          ) : (
            <FaSearch className="text-slate-500 text-xs" />
          )}
        </Button>
      </form>
    </div>
  );
}
