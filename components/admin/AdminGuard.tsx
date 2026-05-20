"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { isAdminUser } from "@/lib/admin";
import { supabase } from "@/lib/supabaseClient";

type AdminGuardProps = {
  children: (user: User) => ReactNode;
};

export function AdminGuard({ children }: AdminGuardProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"checking" | "allowed" | "denied">("checking");

  useEffect(() => {
    let active = true;

    async function checkAccess() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!active) {
        return;
      }

      if (!session?.user) {
        router.replace("/admin/login");
        return;
      }

      const allowed = await isAdminUser(session.user);

      if (!active) {
        return;
      }

      if (!allowed) {
        await supabase.auth.signOut();
        setStatus("denied");
        router.replace("/admin/login?error=no-access");
        return;
      }

      setUser(session.user);
      setStatus("allowed");
    }

    checkAccess();

    return () => {
      active = false;
    };
  }, [router]);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-[#F7F0E8] px-5 py-10 text-[#2C1F3D]">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-lg font-black shadow-[0_24px_70px_rgba(44,31,61,0.12)]">
          Checking admin access...
        </div>
      </div>
    );
  }

  if (status === "denied" || !user) {
    return null;
  }

  return children(user);
}
