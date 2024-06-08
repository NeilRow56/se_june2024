"use server";

import bcryptjs from "bcryptjs";

import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import db from "@/lib/db";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, firstName, lastName } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 12);

  //check if user already exists

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Registration successful!" };
};
