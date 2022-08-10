import { useRouter } from 'next/router';
import { useCallback } from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
    totalPage: number;
    onHandleChangePage: (numberPage: number) => void;
}

const Pagination = ({ totalPage, onHandleChangePage }: Props) => {
    const router = useRouter();

    const goToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    function onPageChange({ selected }: { selected: number }) {
        router.push(
            {
                pathname: router.pathname,
                query: { ...router.query, s: `?page=${selected + 1}` },
            },
            undefined,
            {
                shallow: true,
            }
        );
        onHandleChangePage(selected + 1);
        goToTop();
    }

    return (
        <ReactPaginate
            marginPagesDisplayed={1}
            pageCount={totalPage}
            pageRangeDisplayed={2}
            nextLabel={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            previousLabel={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            containerClassName="flex items-center"
            pageLinkClassName="mx-1 flex items-center justify-center border w-[55px] h-[55px] text-lg font-bold hover:bg-[#252525] hover:border-[#252525] hover:text-[#586800]"
            nextClassName="ml-1"
            nextLinkClassName="flex w-[55px] h-[55px] border items-center justify-center"
            previousClassName="mr-1"
            previousLinkClassName="flex w-[55px] h-[55px] border items-center justify-center"
            breakClassName="mx-1 cursor-not-allowed flex items-center justify-center text-[#252525] border w-[55px] h-[55px] text-lg font-bold hover:bg-[#252525] hover:border-[#252525] hover:text-[#586800]"
            disabledClassName="bg-gray-100 cursor-not-allowed"
            activeLinkClassName="text-[#586800] bg-[#252525] border border-solid border-[#252525]"
            onPageChange={onPageChange}
        />
    );
};

export { Pagination };