import DisplayUser from "@/components/DisplayUser";
import SearchForm from "@/components/SearchForm/SearchForm";
import { CandidateData } from "@/data";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { SearchIcon, LoginIcon } from "@heroicons/react/solid";
import Router, { useRouter } from "next/router";
import { Fragment, KeyboardEvent, useEffect, useRef, useState } from "react";

export interface HrSearchProps {}

export function HrSearch() {
  const node: any = useRef();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState([]);
  const [query, setQuery] = useState<any>("");
  const [open, setOpen] = useState(true);

  //   const handleClick = (e: any) => {
  //     if (isActive) {
  //       setTimeout(() => {
  //         setIsActive(false);
  //       }, 500);
  //     } else {
  //       setIsActive(true);
  //     }
  //   };

  //   const clickOutside = (e: any) => {
  //     if (node.current.contains(e.target)) {
  //       return;
  //     }

  //     setTimeout(() => {
  //       setIsActive(false);
  //     }, 500);
  //   };
  //   useEffect(() => {
  //     document.addEventListener("mousedown", clickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", clickOutside);
  //     };
  //   }, [isActive]);
  const router = useRouter();

  const handleChange = (e: any) => {
    // console.log(query);
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
    console.log(e, query);
    if (e.code === "Enter") {
      router.push({
        pathname: `/SearchPages`,
        query: { ...router.query, search: query },
      });
    }
  };

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
            <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                {({ activeOption }: any) => (
                  <>
                    <div className="relative">
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
                        // type="submit"
                        onClick={handSearch}
                        className="cursor-pointer p-2 rounded-lg shadow-md hover:bg-slate-600 absolute top-1.5 right-4"
                      >
                        <LoginIcon
                          className="pointer-events-none h-5 w-5 text-gray-400 hover:text-gray-100"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    {filteredPeople.length > 0 && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100"
                      >
                        <div
                          className={classNames(
                            "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                            activeOption && "sm:h-96"
                          )}
                        >
                          {query === "" && (
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                              Gợi ý tìm kiếm
                            </h2>
                          )}
                          <div className="-mx-2 text-sm text-gray-700">
                            {filteredPeople.map((person) => (
                              <Combobox.Option
                                as="div"
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                  classNames(
                                    "flex cursor-default select-none items-center rounded-md p-1 mt-4",
                                    active && "bg-gray-100 text-gray-900"
                                  )
                                }
                              >
                                {({ active }) => (
                                  <>
                                    <span className="ml-3 flex-auto truncate">
                                      <SearchForm
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
                        {activeOption && (
                          <DisplayUser activeOption={activeOption} />
                        )}
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
