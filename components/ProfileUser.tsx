/* eslint-disable @next/next/no-img-element */
import { CandidateData } from "@/data";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

export interface ProfileUserProps {}

export function ProfileUser({ Route }: any) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const newUserData = CandidateData.filter(
      (data) => data.id === Number(Route.query.UserId)
    );
    setUser(newUserData);
  }, [Route.query.UserId]);

  const num: number = 1000;
  const mathnormal: any = Math.sign(num) * Math.abs(num);
  const mathnormaldone: any =
    Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + "K";
  const [count, setCount] = useState(mathnormal);
  useEffect(() => setCount(mathnormaldone), []);
  return (
    <div className="mt-20 border border-slate-300 rounded-lg">
      {user &&
        user.map((data: any) => (
          <div key={data.id} className=" p-4">
            <div className="flex items-center justify-center gap-x-10">
              <div className="w-20">
                <img className="rounded-lg" src={data.avatar} alt="avt" />
              </div>

              <div>
                <h2 className="font-bold text-2xl">{data.name}</h2>
                <p>Ngày sinh: {data.birthday}</p>
                <p>Địa chỉ: {data.street}</p>
                <p>Email: {data.email}</p>
                <p>Số điện thoại: {data.number}</p>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center justify-center gap-32 font-semibold text-xl">
                <h2>Quá trình học tập</h2>
                <h2>Quá trình làm việc</h2>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col ml-auto items-start col-span-1 mr-12">
                  {data.learnstory &&
                    data.learnstory.map((item: any) => (
                      <div
                        key={item.id}
                        className="learnstory flex flex-col items-end justify-end relative py-10 w-52"
                      >
                        <h3 className="text-right">{item.year}</h3>
                        <h3 className="text-right font-semibold">{item.job}</h3>
                        <h3 className="text-right truncate">{item.stage1}</h3>
                      </div>
                    ))}
                </div>
                <div className="flex items-start justify-start border-l-2 col-span-1 pt-20">
                  <div className="flex flex-col items-start">
                    {data.jobstory &&
                      data.jobstory.map((items: any) => (
                        <div
                          key={items.id}
                          className="flex flex-col items-start"
                        >
                          <div className="jobstory flex flex-col items-center relative py-12 px-12">
                            <h3>{items.year}</h3>
                            <div className="flex">
                              <h3>{items.stage1}</h3>
                              <p className="w-2 h-[1px] bg-slate-500 mt-3 mx-2"></p>
                              <h3 className="font-semibold">{items.job}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <p className="h-[1px] bg-black mt-10 mx-10 mb-5"></p>
      <div className="flex px-12 mb-10">
        <button
          type="button"
          className="inline-flex w-24 justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none "
        >
          <p className="mr-2">100</p>
          <FontAwesomeIcon className="mr-3 w-5 h-5" icon={faThumbsUp} />
        </button>

        <button
          type="button"
          className="inline-flex ml-5 w-24 justify-center items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none "
        >
          <p className="mr-2 line-clamp-1">{count}</p>
          <FontAwesomeIcon className="mr-3 w-5 h-5" icon={faThumbsDown} />
        </button>
      </div>
    </div>
  );
}
