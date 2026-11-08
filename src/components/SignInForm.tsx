"use client";

import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { LuAsterisk } from "react-icons/lu";

export const SignInForm = () => {
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("Credential sign-in is not available yet. Please use Google or GitHub.");
  };
  return (
    <div>
      <h2 className="text-xl font-bold">Credential sign in</h2>
      <form onSubmit={handleSignIn} className="py-3 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Username or email address{" "}
            <LuAsterisk className="text-lightRed text-xs" />
          </Label>
          <Input id="email" type="email" placeholder="john@youremail.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">
            Password <LuAsterisk className="text-lightRed text-xs" />
          </Label>
          <Input id="password" type="password" placeholder="ex:#123456$" required />
        </div>
        <Button className="rounded-md mt-3 bg-lightRed">Sign in</Button>
      </form>
    </div>
  );
};
