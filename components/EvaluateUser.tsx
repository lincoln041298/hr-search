/* eslint-disable @next/next/no-img-element */
import { CandidateData } from "@/data";
import ImgSend from "@/public/send.svg";
import Image from "next/image";
import { useState } from "react";
export interface EvaluateUserProps {}

export function EvaluateUser() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e: any) => {
    setTitle(e.target.value);
  };

  const updateText = (text: any) => {
    setTitle(title + text);
  };

  return (
    <div className="my-20 border border-slate-300 rounded-lg">
      <div className="p-5">
        <h2 className="font-bold text-2xl">Đánh giá ứng viên</h2>
        <div className="mt-3 border border-slate-600 rounded-lg">
          <div className="p-2 block">
            <div className="recomment">
              <ul className="flex items-cente cursor-pointer">
                <button
                  onClick={() => updateText("Ứng viên sáng giá")}
                  className="p-1.5 bg-blue-400 border border-gray-50 text-white rounded-lg mr-2"
                >
                  Ứng viên sáng giá
                </button>
                <button
                  onClick={() => updateText(" Có tiềm năng")}
                  className="p-1.5 bg-blue-400 border border-gray-50 text-white rounded-lg mr-2"
                >
                  Có tiềm năng
                </button>
                <button
                  onClick={() => updateText(" Nên tuyển dụng")}
                  className="p-1.5 bg-blue-400 border border-gray-50 text-white rounded-lg mr-2"
                >
                  Nên tuyển dụng
                </button>
                <button
                  onClick={() => updateText(" Không nên tuyển dụng")}
                  className="p-1.5 bg-blue-400 border border-gray-50 text-white rounded-lg "
                >
                  Không nên tuyển dụng
                </button>
              </ul>
            </div>
            <form className="mt-5 flex items-center">
              <input
                value={title}
                type="text"
                onChange={handleOnChange}
                placeholder="Viết đánh giá tại đây "
                className="w-full rounded-lg border-none focus:ring-white"
              />
              <p className="mr-4 w-5 h-5">
                <Image alt="avt" src={ImgSend}></Image>
              </p>
            </form>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="px-10">
            <div className="">
              {CandidateData.map((data) => (
                <div
                  key={data.id}
                  className={`${
                    data.comment ? "block" : "hidden"
                  } my-4 flex items-center`}
                >
                  <p className="">
                    <img
                      className="rounded-full object-cover w-20 h-20"
                      src={data.avatar}
                      alt="avt in there"
                    ></img>
                  </p>
                  <div className="ml-10">
                    <h3 className="text-xl font-semibold cursor-pointer hover:underline">
                      {data.name} - {data.job}
                    </h3>
                    <div>
                      <p className="text-sm font-light">27/07/2022 17:10</p>
                    </div>
                    <div className="mt-3">
                      <p>{data.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
