"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/logout", { method: "POST" }).then(() => {
      router.replace("/admin/login");
    });
  }, [router]);

  return <p className="p-4">Logging out...</p>;
}
