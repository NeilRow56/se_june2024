"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";
import { CardWrapper } from "./CardWrapper";
import { LoginSchema } from "@/schemas";
import { PasswordInput } from "./PasswordInput";
import { Loader2, LogIn } from "lucide-react";
import { useTransition } from "react";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/sign-up"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex w-full">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
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
                  <FormLabel className="flex w-full">Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="max-w-[150px]" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4" /> Processing
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" /> Login
              </>
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
