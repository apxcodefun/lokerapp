import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {ToastContainer} from "react-toastify"

export const metadata = {
  title: "Job App",
  description: "Website Informasi Loker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="dark">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
    </ClerkProvider>
  );
}
