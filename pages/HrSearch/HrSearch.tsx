import DisplayUser from '@/components/DisplayUser';
import SearchForm from '@/components/SearchForm';
import { CandidateData } from '@/data';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export interface HrSearchProps {}

export function HrSearch() {
    const node: any = useRef();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [selectedPerson, setSelectedPerson] = useState('');
    const [query, setQuery] = useState('');
    console.log(selectedPerson);
    const handleClick = (e: any) => {
        setIsActive(!isActive);
    };

    const clickOutside = (e: any) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setIsActive(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [isActive]);
    const router = useRouter();
    const handleClickPage = (id: number) => {
        router.push(`/pageuser/${id}`);
    };

    const filteredPeople =
        query === ''
            ? CandidateData
            : CandidateData.filter((person) => {
                  return person.name
                      .toLowerCase()
                      .includes(query.toLowerCase());
              });

    return (
        <section className="bg-slate-800">
            <div className="max-w-6xl mx-auto py-20">
                <div className="rounded-lg shadow-lg bg-white">
                    <h1 className="text-5xl pt-10 font-semibold text-center text-black">
                        Candidate Page
                    </h1>
                    <div className="mt-10 px-20 py-20 ">
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
                                                    className="w-full rounded-lg"
                                                    onChange={(event) =>
                                                        setQuery(
                                                            event.target.value
                                                        )
                                                    }
                                                    ref={node}
                                                    onClick={handleClick}
                                                    displayValue={(
                                                        person: any
                                                    ) => person.name}
                                                />
                                                <div
                                                    className={`${
                                                        isActive && `active`
                                                    } list-data`}
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
                                                                        {({
                                                                            selected,
                                                                        }) => {
                                                                            return (
                                                                                <SearchForm
                                                                                    person={
                                                                                        person
                                                                                    }
                                                                                    handleClickPage={
                                                                                        handleClickPage
                                                                                    }
                                                                                />
                                                                            );
                                                                        }}
                                                                    </Combobox.Option>
                                                                )
                                                            )}
                                                        </Combobox.Options>
                                                    </div>

                                                    <div>
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
