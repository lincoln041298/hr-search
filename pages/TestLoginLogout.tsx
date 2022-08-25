import LoginTest from "@/components/TestLoginLogout/Logintest";
import SignUp from "@/components/TestLoginLogout/SignUp";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/router";

export default function TestLoginLogout() {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div className="flex max-w-4xl mx-auto">
      {user ? (
        <div
          onClick={() => {
            logout();
            router.push("/TestLoginLogout");
          }}
        >
          Logout
        </div>
      ) : (
        <div className="flex">
          <div>
            <LoginTest />
          </div>
          {/* <div className="ml-10">
            <SignUp />
          </div> */}
        </div>
      )}
    </div>
  );
}
