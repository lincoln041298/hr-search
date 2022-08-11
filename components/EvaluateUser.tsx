import { CandidateData } from '@/data';
import Image from 'next/image';
import { FormAutoCompleted } from './Form';
export interface EvaluateUserProps {}

export function EvaluateUser() {
    return (
        <div className="mt-20 border border-slate-300 rounded-lg">
            <div className="p-5">
                <h2 className="font-bold text-2xl">Đánh giá ứng viên</h2>
                <div className="mt-3 border border-slate-600 rounded-lg">
                    <div className="p-2 block">
                        <div className="recomment">
                            <ul className="flex items-cente cursor-pointer">
                                <li className="p-1.5 bg-slate-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">
                                    Ứng viên sáng giá
                                </li>
                                <li className="p-1.5 bg-orange-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">
                                    Có tiềm năng
                                </li>
                                <li className="p-1.5 bg-green-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">
                                    Nên tuyển dụng
                                </li>
                                <li className="p-1.5 bg-purple-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg ">
                                    Không nên tuyển dụng
                                </li>
                            </ul>
                        </div>
                        <form className="mt-5">
                            <FormAutoCompleted />
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
                                        data.comment ? 'block' : 'hidden'
                                    } my-4 flex items-center`}
                                >
                                    <p>
                                        <Image
                                            className="rounded-full"
                                            src={data.avatar}
                                            width={60}
                                            height={60}
                                        ></Image>
                                    </p>
                                    <div className="ml-10">
                                        <h3 className="text-xl font-semibold cursor-pointer hover:underline">
                                            {data.name} - {data.job}{' '}
                                        </h3>
                                        <div>
                                            <p className="text-sm font-light">
                                                27/07/2022 17:10
                                            </p>
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
