import DisplayUser from '@/components/DisplayUser';
import SearchForm from '@/components/SearchForm';
import { CandidateData } from '@/data';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export interface HrSearchProps {}

export function HrSearch() {
    const node: any = useRef();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [selectedPerson, setSelectedPerson] = useState([]);
    const [query, setQuery] = useState<any>('');
    console.log(query);
    const handleClick = (e: any) => {
        if (isActive) {
            setTimeout(() => {
                setIsActive(false);
            }, 500);
        } else {
            setIsActive(true);
        }
    };

    const clickOutside = (e: any) => {
        if (node.current.contains(e.target)) {
            return;
        }

        setTimeout(() => {
            setIsActive(false);
        }, 500);
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [isActive]);

    const filteredPeople =
        query === ''
            ? CandidateData
            : CandidateData.filter((person: any) => {
                  return person.name
                      .toLowerCase()
                      .includes(query.toLowerCase());
              });

    return (
        <section className="">
            <div className="max-w-6xl mx-auto py-20">
                <div className="">
                    <h1 className="text-5xl pt-10 font-semibold text-center text-black">
                        Candidate Page
                    </h1>
                    <div className="px-20 py-10 ">
                        <div className="p-20">
                            <h3 className="text-slate-500 font-medium text-xl">
                                Tìm kiếm ứng viên
                            </h3>
                            <form
                                action="search"
                                className="mt-5 flex items-center"
                            >
                                <div className={`relative w-full`}>
                                    <Combobox
                                        value={selectedPerson}
                                        onChange={setSelectedPerson}
                                    >
                                        {({ activeOption }: any) => (
                                            <>
                                                <Combobox.Input
                                                    className="w-full rounded-lg border-none bg-slate-100 relative"
                                                    onChange={(event) =>
                                                        setQuery(
                                                            event.target.value
                                                        )
                                                    }
                                                    ref={node}
                                                    onClick={handleClick}
                                                />
                                                <div
                                                    className={clsx(
                                                        'list-data',
                                                        isActive ? 'active' : ''
                                                    )}
                                                >
                                                    <div className="col-span-1 ">
                                                        <Combobox.Options>
                                                            {filteredPeople.map(
                                                                (person) => (
                                                                    <Combobox.Option
                                                                        key={
                                                                            person.id
                                                                        }
                                                                        value={
                                                                            person
                                                                        }
                                                                    >
                                                                        <SearchForm
                                                                            person={
                                                                                person
                                                                            }
                                                                        />
                                                                    </Combobox.Option>
                                                                )
                                                            )}
                                                        </Combobox.Options>
                                                    </div>

                                                    <div className="border-l-[0.5px]  ">
                                                        {activeOption && (
                                                            <div>
                                                                <DisplayUser
                                                                    activeOption={
                                                                        activeOption
                                                                    }
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </Combobox>
                                    <p className="absolute right-4 top-2.5 w-5 h-5">
                                        <FontAwesomeIcon
                                            className="text-slate-300"
                                            icon={faMagnifyingGlass}
                                        />
                                    </p>
                                </div>
                                <p className="ml-4 w-5 h-5">
                                    <FontAwesomeIcon
                                        className="text-white"
                                        icon={faFilter}
                                    />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
