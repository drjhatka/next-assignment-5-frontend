import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-slate-100 rounded-xl ml-2">{children}</div>
      </div>
    </div>
  );
}
