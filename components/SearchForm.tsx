import { CandidateData } from '@/data';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Pagination } from './Pagination';

export interface Props {}

const SearchForm = ({ person, handleClickPage }: any) => {
    const router = useRouter();

    return (
        <div
            className=" bg-white p-1 rounded-lg"
            onClick={() => {
                router.push({
                    pathname: '/pageuser/[UserId]',
                    query: { UserId: person.id },
                });
            }}
        >
            <div className="flex items-center hover:bg-slate-200 cursor-pointer hover:text-white p-1 rounded-lg mr-1">
                <p className="mt-2 ml-4">
                    <Image
                        src={person.avatar}
                        width={30}
                        height={30}
                        className="rounded-full"
                        alt="imgavt"
                    ></Image>
                </p>
                <div className="block mr-10 cursor-pointer w-full">
                    <div className="flex justify-between">
                        <div className="flex w-full ml-5 items-center">
                            <h3 className="mr-1 text-sm font-light text-gray-800">
                                {person.name}
                            </h3>
                            <div className="text-xs font-light bg-slate-500 text-slate-50 inline-flex p-0.5 rounded-sm text-">
                                #{person.city}
                            </div>
                        </div>
                        <p className="">
                            <FontAwesomeIcon
                                className="text-slate-500"
                                icon={faAngleRight}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
