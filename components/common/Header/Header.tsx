import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export interface HeaderProps {}

export function Header() {
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
            {/* <button
              type="button"
              onClick={() => router.push("/SignUp")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng ký
            </button>
            <button
              type="button"
              onClick={() => router.push("/Login")}
              className="inline-flex items-center ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng Nhập
            </button> */}
            <button
              type="button"
              onClick={() => router.push("/AccountTSH")}
              className="inline-flex items-center ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Tài khoản
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
