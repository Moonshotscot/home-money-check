import type { Metadata } from "next";
import { NoticeboardAdmin } from "@/components/admin/NoticeboardAdmin";

export const metadata: Metadata = {
  title: "Admin | Home Money Check",
  description: "Manage Home Money Check noticeboard items.",
};

export default function AdminNoticeboardPage() {
  return <NoticeboardAdmin />;
}
