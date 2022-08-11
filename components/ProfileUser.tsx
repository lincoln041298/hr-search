import { CandidateData } from '@/data';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
export interface ProfileUserProps {}

export function ProfileUser({ Route }: any) {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        const newUserData = CandidateData.filter(
            (data) => data.id === Number(Route.query.UserId)
        );
        setUser(newUserData);
    }, []);
    console.log(setUser);
    return (
        <div className="mt-20 border border-slate-300 rounded-lg">
            {user &&
                user.map((data: any) => (
                    <div key={data.id} className=" p-4">
                        <div className="flex items-center justify-center gap-x-10">
                            <p>
                                <Image
                                    className="rounded-lg"
                                    src={data.avatar}
                                    width={100}
                                    height={100}
                                />
                            </p>
                            <div>
                                <h2 className="font-bold text-2xl">
                                    {data.name}
                                </h2>
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
                            <div className="flex justify-center">
                                <div className="inline-block">
                                    <div className="flex flex-col items-end my-10 p-12">
                                        {data.learnstory &&
                                            data.learnstory.map((item: any) => (
                                                <div key={item.id}>
                                                    <h3 className="learnstory flex items-center  relative py-3">
                                                        {item.stage1}
                                                    </h3>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center border-l-2">
                                    <div className="block">
                                        {data.jobstory &&
                                            data.jobstory.map((items: any) => (
                                                <div key={items.id}>
                                                    <div className="jobstory flex items-center relative my-10 px-12">
                                                        {items.stage1}
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
                <Tippy
                    interactive={true}
                    theme="light"
                    content={
                        <div className="">
                            <ul>
                                <li>Nguyen Van Linh</li>
                                <li>Nguyen Dang Duc Linh</li>
                            </ul>
                        </div>
                    }
                >
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <FontAwesomeIcon
                            className="mr-3 w-10 h-10"
                            icon={faThumbsUp}
                        />
                        Thích
                    </button>
                </Tippy>
                <Tippy
                    interactive={true}
                    theme="light"
                    content={
                        <div>
                            <ul>
                                <li>0</li>
                            </ul>
                        </div>
                    }
                >
                    <button
                        type="button"
                        className="inline-flex ml-5 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <FontAwesomeIcon
                            className="mr-3 w-10 h-10"
                            icon={faThumbsDown}
                        />
                        Không Thích
                    </button>
                </Tippy>
            </div>
        </div>
    );
}
