import LoginForm from "@/app/(no-header-footer)/login/components/LoginForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>
        <LoginForm />

        <div className="text-center">
          <p>
            Don&#39;t have an account?{" "}
            <Button variant="link" className="p-0">
              <Link href="/signup">Signup</Link>
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
