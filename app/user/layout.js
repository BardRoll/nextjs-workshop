import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <div>
      <nav>Nav bar</nav>
      {children}
    </div>
  );
}
