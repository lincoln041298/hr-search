import SearchPage from "@/components/SearchForm/SearchPage";
import { CandidateData } from "@/data";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { FilterIcon, LoginIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Fragment, KeyboardEvent, useEffect, useRef, useState } from "react";

export interface HrSearchProps {}

export default function SearchPages() {
  const node: any = useRef();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState([]);
  const [query, setQuery] = useState<any>("");
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  const handSearch = (e: any) => {
    router.push({
      pathname: `/SearchPages`,
      query: { ...router.query, search: query },
    });
  };
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      router.push({
        pathname: `/SearchPages`,
        query: { ...router.query, search: query },
      });
    }
  };

  useEffect(() => {
    setQuery(router.query.search);
  }, [router.query.search]);

  const filteredPeople =
    query === ""
      ? CandidateData
      : CandidateData.filter((person: any) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child as={Fragment}>
          <div className="block inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>
        <div className="block inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child as={Fragment}>
            <Dialog.Panel className="mx-auto max-w-3xl overflow-hidden transition-all">
              <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                {({ activeOption }: any) => (
                  <>
                    <div className="flex items-center">
                      <div className="relative rounded-lg border w-full">
                        <SearchIcon
                          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <Combobox.Input
                          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                          placeholder="Tìm kiếm ứng viên..."
                          onChange={handleChange}
                          onKeyDown={handleKeydown}
                        />
                        <Combobox.Button
                          onClick={handSearch}
                          className="cursor-pointer p-2 rounded-lg shadow-md hover:bg-slate-600 absolute top-1.5 right-4"
                        >
                          <LoginIcon
                            className="pointer-events-none h-5 w-5 text-gray-400 hover:text-gray-100"
                            aria-hidden="true"
                          />
                        </Combobox.Button>
                      </div>
                      <p className="mx-2">
                        <FilterIcon
                          className="pointer-events-none h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </p>
                    </div>

                    {filteredPeople.length > 0 && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex border rounded-lg mt-5 mr-[2.1rem]"
                      >
                        <div
                          className={classNames(
                            "max-h-96 min-w-0 overflow-y-auto px-6 py-4 w-full",
                            activeOption && "sm:h-96"
                          )}
                        >
                          <div className=" text-sm text-gray-700">
                            {filteredPeople.map((person) => (
                              <Combobox.Option
                                as="div"
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                  classNames(
                                    "flex  items-center rounded-md p-1 mt-3 first:mt-0",
                                    active && "bg-gray-100 text-gray-900"
                                  )
                                }
                              >
                                {({ active }) => (
                                  <>
                                    <span className="ml-3 flex-auto">
                                      <SearchPage
                                        person={person}
                                        active={active}
                                      />
                                    </span>
                                  </>
                                )}
                              </Combobox.Option>
                            ))}
                          </div>
                        </div>
                      </Combobox.Options>
                    )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
