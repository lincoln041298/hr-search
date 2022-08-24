import { MainLayout } from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const router = useRouter();
  console.log(router);
  return (
    <MainLayout>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Quên mật khẩu?</h1>
        <p className="text-sm font-light my-5">
          Nhập số điện thoại của vào đây
        </p>
        <form>
          <div>
            <input
              type="text"
              placeholder="Nhập số điện thoại..."
              className="form-input placeholder:text-xs text-sm font-light rounded-lg w-60"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Nhập mật khẩu mới..."
              className="form-input placeholder:text-xs text-sm font-light rounded-lg w-60"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Nhập lại mật khẩu mới..."
              className="form-input placeholder:text-xs text-sm font-light rounded-lg w-60"
            />
          </div>
          <div className="mt-5">
            <Link href="./PswConfirm">
              <a>
                <button
                  type="submit"
                  className="text-sm font-light rounded-lg bg-sky-700 text-white p-2"
                >
                  Tiếp theo
                </button>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
