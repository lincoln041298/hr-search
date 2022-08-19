import { useContext, useRef, useState } from "react";
import { Combobox } from "@headlessui/react";
import { UserProvider, useUser } from "@/context/UserContext";
import { UserLogin } from "@/data";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export interface TestThemeProps {
  value?: any;
  setValue?: any;
}

export default function TestTheme() {
  const { user, setUser } = useUser();
  return (
    <div>
      <h2>Home</h2>
      <div>{JSON.stringify(user, null, 2)}</div>
      <button>Login</button>
    </div>
  );
}
