import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin | Home Money Check",
  description: "Home Money Check back office.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
