import NavMenus from "@/components/sections/main-header/NavMenus";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
