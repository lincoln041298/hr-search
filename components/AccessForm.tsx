import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { MessageError } from "./FormError";
import { useState } from "react";
import { useAuth } from "@/context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icongoogle from "@/public/google-brands.svg";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/config/firebase";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable @next/next/no-img-element */
export interface AccessFormProps {}

type RegisterFormProps = {
  email: string;
  numberphone: number;
  name: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  email: yup.string().required("Vui lòng nhập email của bạn"),
  // name: yup.string().required("Vui lòng nhập tên của bạn"),
  // numberphone: yup
  //   .number()
  //   .min(11, "Vui lòng nhập đủ 11 số")
  //   .required("Vui lòng nhập số điện thoại của bạn"),
  password: yup
    .string()
    .min(8, "Vui lòng nhập hơn 8 ký tự")
    .max(32, "Vui lòng nhập hơn 32 ký tự")
    .required("Vui lòng nhập password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password cần phải khớp"),
});

export default function AccessForm() {
  const router = useRouter();
  const { user, signup } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(schema),
  });
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await signup(data.email, data.numberphone, data.password);
      setLoading(false);
      router.push("AfterLogin/UserLogin");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/AfterLogin/UserLogin");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const togglePassword = () => {
    setPassword(!password);
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Đăng ký tài khoản của bạn
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    {...register("email")}
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && (
                    <MessageError message={errors.email.message} />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Số điện thoại
                </label>
                <div className="mt-1">
                  <input
                    {...register("numberphone")}
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.numberphone && (
                    <MessageError message={errors.numberphone.message} />
                  )}
                </div>
              </div>
              {/* <div> 
                <label className="block text-sm font-medium text-gray-700">
                  Họ và tên
                </label>
                <div className="mt-1">
                  <input
                    {...register("name")}
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.name && (
                    <MessageError message={errors.name.message} />
                  )}
                </div>
              </div> */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={`${password ? "text" : "password"}`}
                    {...register("password")}
                    className="appearance-none  block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.password && (
                    <MessageError message={errors.password.message} />
                  )}
                  <div
                    className="absolute right-2 top-2"
                    onClick={togglePassword}
                  >
                    {password ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nhập lại password
                </label>
                <div className="mt-1">
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.confirmPassword && (
                    <MessageError message={errors.confirmPassword.message} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng ký
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc đăng nhập với
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <button
                    onClick={handleGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <Image
                      src={icongoogle}
                      width={20}
                      height={20}
                      alt="logo google"
                    />
                  </button>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs font-light mt-4">
              Bạn đã có tài khoản?
              <Link href="./AccountTSH">
                <a className="pl-2 underline">Đăng nhập ngay</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
