import { CandidateData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pagination } from './Pagination';

export interface Props {}
const SearchForm = ({ person }: any) => {
    const router = useRouter();
    return (
        <div className=" bg-white p-1 rounded-lg">
            <ul>
                <Link href={`/pageuser/${person.id}`}>
                    <a>
                        <li>
                            <div className="flex items-center hover:bg-slate-700 cursor-pointer hover:text-white p-2 rounded-lg">
                                <p className="mt-2">
                                    <Image
                                        src={person.avatar}
                                        width={20}
                                        height={20}
                                        className="rounded-full"
                                        alt="imgavt"
                                    ></Image>
                                </p>
                                <div className="block ml-4 cursor-pointer">
                                    <div>
                                        <div className="block ">
                                            <h3 className="mr-1 ">
                                                {person.name}
                                            </h3>
                                            <div className="text-xs font-light bg-slate-500 inline-flex p-0.5 rounded-sm text-white">
                                                #{person.city}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </a>
                </Link>
            </ul>
            {/* <Pagination
                onHandleChangePage={handleChangePage}
                totalPage={totalPage}
            /> */}
        </div>
    );
};

export default SearchForm;
