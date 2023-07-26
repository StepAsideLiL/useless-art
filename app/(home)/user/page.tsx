"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const UserPage = () => {
  return (
    <main className="container min-h-screen p-10 mx-auto">
      <h1>UserPage</h1>
      <Button onClick={() => signOut()}>Logout</Button>
    </main>
  );
};

export default UserPage;
