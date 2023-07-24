import NavMenus from "@/components/sections/main-header/NavMenus";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import LoginForm from "@/components/sections/main-header/LoginForm";
import SignupForm from "@/components/sections/main-header/SignupForm";

const Navbar = () => {
  return (
    <header className="container py-4 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium">
            <Link href="/">Useless Art</Link>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <NavMenus />

          {/* <Dialog>
            <DialogTrigger>
              <BsPerson className="text-xl" />
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h1 className="text-xl text-center">Login/Signup</h1>
                </DialogTitle>

                <DialogDescription>
                  <Tabs defaultValue="account" className="w-[400px] mx-auto">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Login</TabsTrigger>
                      <TabsTrigger value="password">Signup</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                      <LoginForm />
                    </TabsContent>

                    <TabsContent value="password">
                      <SignupForm />
                    </TabsContent>
                  </Tabs>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}

          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
