import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface Props {
  children: ReactNode;
}

export const UserContext = createContext<any>("");

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string>("a du ma");
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
