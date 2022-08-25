import { MainLayout } from "@/components/Layout";
import LoginForm from "@/components/LoginForm";

export interface AccountTSHProps {}

export default function AccountTSH() {
  return (
    <MainLayout>
      <div>
        <LoginForm />
      </div>
    </MainLayout>
  );
}
