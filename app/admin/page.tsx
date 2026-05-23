import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin | Home Money Check",
  description: "Home Money Check admin area.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
