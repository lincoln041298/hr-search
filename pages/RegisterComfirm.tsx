import { MainLayout } from "@/components/Layout";
import { useState } from "react";
import spinanimation from "@/public/spinanimation.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function RegisterComfirm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (data: any) => {
    setLoading(true);
    const loadingdata = await timeout(1000);
    setLoading(false);
  };
  console.log(timeout);

  return (
    <MainLayout>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Xác nhận đăng ký</h1>
        <div className="mt-10 font-light text-sm">
          <p>Nhập mã xác nhận được gửi về số điện thoại của bạn tại đây:</p>
          <input type="text" className="form-input mt-3 rounded-lg" />
          <div className="flex w-full justify-center mt-2 text-xs">
            Bạn chưa nhận được mã?
            <form action="#" onClick={onSubmit}>
              {loading ? (
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="underline cursor-pointer ml-2"
                  >
                    Gửi lại
                  </button>
                  <Image
                    src={spinanimation}
                    width={20}
                    height={20}
                    alt="animation"
                    className="bg-white"
                  ></Image>
                </div>
              ) : (
                <button type="submit" className="underline cursor-pointer ml-2">
                  Gửi lại
                </button>
              )}
            </form>
          </div>
          <div className="mt-4 ">
            <button className="py-2 px-2 w-20 text-xs rounded-lg  bg-blue-400 text-white hover:bg-blue-700">
              Quay lại
            </button>
            <button
              onClick={() => router.push("/AfterLogin/UserLogin")}
              className="py-2 px-2 w-20 ml-5 text-xs rounded-lg  bg-blue-400 text-white hover:bg-blue-700"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
