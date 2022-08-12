import Image from 'next/image';

export interface DisplayUserProps {}

const DisplayUser = ({ activeOption }: any) => {
    return (
        <div className="">
            <div className="text-center">
                <p className="bg-auto">
                    <Image
                        className="rounded-full bg-cover"
                        src={activeOption.avatar}
                        width={60}
                        height={60}
                        alt="avataruser"
                    />
                </p>
                <h3 className="mt-2">{activeOption.name}</h3>
                <p className="font-extralight text-sm">{activeOption.job}</p>
            </div>
            <p className="border-b-[1px] bg-slate-400 mt-10 -mr-5"></p>
            <div className="mt-7 pl-5 grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700 w-full">
                <p className="col-end-1 font-semibold text-gray-900">Phone</p>
                <p className="text-sm font-light ml-4">{activeOption.number}</p>
                <p>URL</p>
                <p className="text-sm font-light ml-4 text-blue-400">
                    https://example.com
                </p>

                <p>Email</p>
                <p className="text-sm font-light ml-4 text-blue-400">
                    jeffreywebb@example.com
                </p>
            </div>
            <button
                type="button"
                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 ml-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Send message
            </button>
        </div>
    );
};

export default DisplayUser;
