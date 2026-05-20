"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { isAdminUser } from "@/lib/admin";
import { supabase } from "@/lib/supabaseClient";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noAccess = searchParams.get("error") === "no-access";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(noAccess ? "You do not have admin access for Home Money Check." : "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError || !data.user) {
      setError("Login failed. Please check your email and password.");
      setIsSubmitting(false);
      return;
    }

    const allowed = await isAdminUser(data.user);

    if (!allowed) {
      await supabase.auth.signOut();
      setError("You do not have admin access for Home Money Check.");
      setIsSubmitting(false);
      return;
    }

    router.replace("/admin/enquiries");
  }

  return (
    <div className="min-h-screen bg-[#5F2D8C] px-5 py-10 text-[#2C1F3D]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl items-center">
        <form
          className="relative w-full overflow-hidden rounded-[2.75rem] bg-[#F7F0E8] p-8 shadow-[0_30px_90px_rgba(30,9,55,0.3)] md:p-10"
          onSubmit={handleSubmit}
        >
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-[2.25rem] bg-[#FDCA55]/70" />
          <Image
            alt="Home Money Check"
            className="relative h-16 w-auto object-contain"
            height={88}
            priority
            src="/brand/hmc-logo-full-transparent.png"
            width={248}
          />
          <p className="relative mt-8 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
            Admin login
          </p>
          <h1 className="relative mt-5 text-4xl font-black leading-[0.98] tracking-[-0.065em] md:text-5xl">
            Home Money Check admin
          </h1>
          {error ? (
            <p className="relative mt-5 rounded-[1.35rem] bg-[#FFF1C8] p-4 text-sm font-black leading-6 text-[#6B4611]">
              {error}
            </p>
          ) : null}
          <div className="relative mt-7 grid gap-4">
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Email
              <input
                autoComplete="email"
                className="w-full rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold outline-none ring-2 ring-transparent focus:ring-[#FDCA55]"
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                value={email}
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#5F2D8C]">
              Password
              <input
                autoComplete="current-password"
                className="w-full rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold outline-none ring-2 ring-transparent focus:ring-[#FDCA55]"
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </label>
            <button
              className="rounded-full bg-[#FDCA55] px-7 py-4 text-base font-black text-[#4F247D] shadow-[0_18px_45px_rgba(44,31,61,0.18)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Checking..." : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
