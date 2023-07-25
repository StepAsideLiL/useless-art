"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

type LoginFormProps = {
  className?: string;
};

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
});

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function loginFormSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged in");
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <section className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(loginFormSubmit)}>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Your Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
};

export default LoginForm;
