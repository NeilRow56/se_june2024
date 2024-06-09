import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session || !session.user) redirect("/auth/sign-in");
  return <div>Dashboard Page</div>;
}
