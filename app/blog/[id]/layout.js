import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <footer>footer</footer>
    </div>
  );
}
