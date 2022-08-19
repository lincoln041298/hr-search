/* eslint-disable @next/next/no-img-element */
import {
  faAngleRight,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";

export interface Props {}

const SearchForm = ({ person, active }: any) => {
  const router = useRouter();

  return (
    <div
      className="rounded-lg"
      onClick={() => {
        router.push({
          pathname: "/pageuser/[UserId]",
          query: { UserId: person.id },
        });
      }}
    >
      <div className="grid grid-cols-5 cursor-pointer p-1 rounded-lg mr-1">
        <div className="col-span-1">
          <p className="mt-2 max-w-20 ">
            <img
              src={person.avatar}
              className="rounded-full w-16 h-16"
              alt="imgavt"
            />
          </p>
        </div>
        <div className="flex items-center justify-between col-span-4 cursor-pointer w-full">
          <div className="flex justify-between">
            <div className="block w-full ml-5 ">
              <div className="flex  font-bold mb-2">{person.name}</div>
              <div className="text-xs font-light bg-teal-800 text-slate-50 inline-flex p-2 rounded-full items-center">
                <FontAwesomeIcon className="w-3 h-3" icon={faLocationDot} />
                <p className="ml-2 font-semibold">{person.city}</p>
              </div>
            </div>
          </div>
          <p className={`${active && "button-active"} button-hidden`}>
            <FontAwesomeIcon
              className="w-4 h-4 text-black"
              icon={faAngleRight}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
