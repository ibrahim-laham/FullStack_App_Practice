import { useState } from "react";

import Button from "./Button";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import axios from "axios";
import UserModal from "../UserModal";

export default function Form() {
  let [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  function submitUser() {
    const endpoint = "http://localhost:8000/users";
    axios
      .post(endpoint, userInfo)
      .then((res) => {
        setIsOpen(true);
        return console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Creat a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <EmailField userInfo={userInfo} setUserInfo={setUserInfo} />
          <PasswordField userInfo={userInfo} setUserInfo={setUserInfo} />
          <Button submitUser={submitUser} />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#home"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
      <UserModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
