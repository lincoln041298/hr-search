import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import TestAvatar from "@/public/ahai2.jpeg";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/UserContext";
import { auth, provider } from "@/config/firebase";
import LoginForm from "@/components/LoginForm";

export interface HeaderLoginProps {}

export function HeaderLogin() {
  const { user, logout } = useAuth();

  const router = useRouter();
  return (
    <section className="bg-slate-100">
      <div className="py-5 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p>
              <Image
                className="rounded-lg"
                src={logo}
                width={100}
                height={100}
                alt="avatar"
              ></Image>
            </p>
          </Link>

          <div>
            <div className="flex items-center">
              <Image
                src={TestAvatar}
                className="rounded-full"
                width={40}
                height={40}
                alt="avatar test"
              ></Image>

              <div className="ml-5 flex flex-col cursor-pointer">
                <h3 className="font-medium">
                  {auth.currentUser && auth.currentUser.email}
                </h3>
                <div className="text-sm font-light flex items-center">
                  Thông tin tài khoản
                  <FontAwesomeIcon className="ml-2 w-3 h-3" icon={faGear} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-4xl mx-auto">
        {user ? (
          <div
            onClick={() => {
              logout();
              router.push("/AccountTSH");
            }}
          >
            Logout
          </div>
        ) : (
          <div className="flex">
            <div>
              <LoginForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
