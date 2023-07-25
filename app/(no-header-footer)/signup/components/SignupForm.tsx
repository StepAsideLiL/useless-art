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
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

type SignupFormProps = {
  className?: string;
};

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

const SignupForm: React.FC<SignupFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function loginFormSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);

    axios
      .post("/api/signup", values)
      .then()
      .catch(() => toast.error("Something went wrong! Try again."))
      .finally(() => setIsLoading(false));
  }

  return (
    <section className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(loginFormSubmit)}>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Signup</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        placeholder="Enter Username"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        required
                        placeholder="Enter Email"
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
                        required
                        placeholder="Enter Password"
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
                Signup
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
};

export default SignupForm;
