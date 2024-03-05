"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { SignupButton } from "@/components/buttons/signup-button";
import { LoginButton } from "@/components/buttons/login-button";
import { LogoutButton } from "@/components/buttons/logout-button";

export const NavBarButtons = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__buttons flex md:flex md:flex-grow flex-row justify-end space-x-1 p-5">
      {!user && (
        <>
          <h1 className="flex md:flex md:flex-grow flex-row justify-start">Finagotchi</h1>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <h1 className="flex md:flex md:flex-grow flex-row justify-start">Finagotchi</h1>
          <LogoutButton />
        </>
      )}
    </div>
  );
};