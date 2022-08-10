import { CandidateData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export interface SearchFormProps {}

export function SearchForm() {
    const router = useRouter()
    return (
        <div className="mt-5 bg-white p-4 rounded-lg">
            <ul>
                {CandidateData.map((data: any) => (
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
                                <div onClick={() => router.push({
                                    pathname: '/pageuser/[User]',
                                    query: {User: data.path}
                                })} >
                                    <div className="flex">
                                        <h3>{data.name}</h3>
                                        <p> - {data.birthday}</p>
                                        <p>- {data.job}</p>
                                    </div>
                                    <div>{data.city}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
