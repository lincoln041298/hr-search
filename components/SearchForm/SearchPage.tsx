import { faAngleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";

const SearchPage = ({ person, active }: any) => {
  const router = useRouter();
  console.log(person);
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
          <p className="mt-2 flex flex-shrink-1">
            <Image
              src={person.avatar}
              width={80}
              height={80}
              className="flex-none rounded-full flex-shrink"
              alt="imgavt"
            ></Image>
          </p>
        </div>
        <div className="flex items-center justify-between col-span-4 cursor-pointer w-full">
          <div className="flex justify-between">
            <div className="block w-full ml-5 ">
              <div className="flex  font-bold mb-2">
                <h3>{person.name}</h3>
                <p className="w-3 h-[1px] mt-2.5 mx-1.5 bg-zinc-700"></p>
                <h3>{person.birthday}</h3>
                <p className="w-3 h-[1px] mt-2.5 mx-1.5 bg-zinc-700"></p>
                <h3>{person.job}</h3>
              </div>
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

export default SearchPage;
