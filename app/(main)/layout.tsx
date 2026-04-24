import { ReactNode } from "react";
import MainNavbar from "@/components/MainNavbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
    </>
  );
}
