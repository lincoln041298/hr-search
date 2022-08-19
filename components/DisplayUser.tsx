import Image from "next/image";

export interface DisplayUserProps {}

const DisplayUser = ({ activeOption }: any) => {
  return (
    <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
      <div className="flex-none p-6 text-center">
        <Image
          src={activeOption.avatar}
          width={80}
          height={80}
          className="rounded-full"
          alt="imgavt"
        />
        <h2 className="mt-3 font-semibold text-gray-900">
          {activeOption.name}
        </h2>
        <p className="text-sm leading-6 text-gray-500">{activeOption.job}</p>
      </div>
      <div className="flex flex-auto flex-col justify-between p-6">
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
          <dt className="col-end-1 font-semibold text-gray-900">
            Số điện thoại
          </dt>
          <dd>{activeOption.phone}</dd>
          <dt className="col-end-1 font-semibold text-gray-900">URL</dt>
          <dd className="truncate">
            <a href={activeOption.url} className="text-indigo-600 underline">
              {activeOption.url}
            </a>
          </dd>
          <dt className="col-end-1 font-semibold text-gray-900">Email</dt>
          <dd className="truncate">
            <a
              href={`mailto:${activeOption.email}`}
              className="text-indigo-600 underline"
            >
              {activeOption.email}
            </a>
          </dd>
        </dl>
        <button
          type="button"
          className="mt-6 w-full rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Gửi tin nhắn
        </button>
      </div>
    </div>
  );
};

export default DisplayUser;
