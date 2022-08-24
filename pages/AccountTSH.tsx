import { MainLayout } from "@/components/Layout";
import SignUpForm from "@/components/SignUpForm";

export interface AccountTSHProps {}

export default function AccountTSH() {
  return (
    <MainLayout>
      <div>
        <SignUpForm />
      </div>
    </MainLayout>
  );
}
