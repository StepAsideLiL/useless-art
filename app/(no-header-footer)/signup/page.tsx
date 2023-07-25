import SignupForm from "@/app/(no-header-footer)/signup/components/SignupForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>
        <SignupForm />

        <div className="text-center">
          <p>
            Have an account?{" "}
            <Button variant="link" className="p-0">
              <Link href="/login">Login</Link>
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
