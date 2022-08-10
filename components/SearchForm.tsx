import { CandidateData } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Pagination } from './pagination';
export interface Props {}
const SearchForm = ({ itemsPerPage }: any) => {
    const router = useRouter();
    const [currentPages, setCurrentPages] = useState<number>(1);
    const [productPerPage, setProductPerPage] = useState<number>(3);

    const indexofLastUser = currentPages * productPerPage;

    const indexofFirstUser = indexofLastUser - productPerPage;

    const sliceCandidateData = CandidateData.slice(
        indexofFirstUser,
        indexofLastUser
    );

    const totalPage = Math.ceil(CandidateData.length / 3);
    const handleChangePage = (pageNumber: number) =>
        setCurrentPages(pageNumber);
    return (
        <div className="mt-5 bg-white p-4 rounded-lg">
            <ul>
                {sliceCandidateData.map((data: any) => (
                    <li key={data.id}>
                        <div className="flex items-center my-4 hover:bg-slate-700 p-2 rounded-lg">
                            <p>
                                <Image
                                    src={data.avatar}
                                    width={50}
                                    height={50}
                                    className="rounded-lg"
                                ></Image>
                            </p>
                            <div className="text-slate-400 block ml-4 cursor-pointer">
                                <div
                                    onClick={() =>
                                        router.push({
                                            pathname: '/pageuser/[UserId]',
                                            query: { UserId: data.id },
                                        })
                                    }
                                >
                                    <div className="flex">
                                        <h3 className="mr-1">{data.name}</h3>
                                        <p> - {data.birthday}</p>
                                        <p> - {data.job}</p>
                                    </div>
                                    <div>{data.city}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination
                onHandleChangePage={handleChangePage}
                totalPage={totalPage}
            />
        </div>
    );
};

export default SearchForm;
