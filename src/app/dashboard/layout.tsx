import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  return (
    <html>
      <body className="flex gap-[2rem]">
        <DashboardNavbar />

        {children}
      </body>
    </html>
  );
}
