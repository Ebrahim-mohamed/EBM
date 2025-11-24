"use client";
// app/dashboard/layout.tsx
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import AuthGuard from "./AuthGuard";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  // This hook only works in "use client" components
  // So we need to make this a client component
  "use client";
  const pathname = usePathname();

  const isLoginPage = pathname === "/dashboard/login";

  if (isLoginPage) {
    // For login page, render without auth guard
    return (
      <html>
        <body className="flex min-h-screen min-w-screen">{children}</body>
      </html>
    );
  }

  // For all other dashboard pages, use AuthGuard
  return (
    <html>
      <body className="flex min-h-screen min-w-screen">
        <AuthGuard>
          <DashboardNavbar />
          <main className="flex-1">{children}</main>
        </AuthGuard>
      </body>
    </html>
  );
}
