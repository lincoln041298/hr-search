import { MainLayout } from "@/components/Layout";
import { UserProvider } from "@/context/UserContext";
import "@/styles/main.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState<string>("helo from context");
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
