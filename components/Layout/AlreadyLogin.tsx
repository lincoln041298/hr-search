import { HeaderLogin } from "../common/Header";

export interface AlreadyLoginProps {
  children?: React.ReactNode;
}

export function AlreadyLogin({ children }: AlreadyLoginProps) {
  return (
    <main>
      <HeaderLogin />
      <div>{children}</div>
    </main>
  );
}
