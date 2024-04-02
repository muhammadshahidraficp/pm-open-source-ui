import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-darkPrimary text-white flex-grow pb-4 w-screen md:w-auto overflow-auto">
      {children}
    </div>
  );
}
