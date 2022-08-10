import SearchForm from '@/components/SearchForm';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HrSearchProps {}

export function HrSearch() {
    return (
        <section className="bg-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl pt-20 font-semibold text-center text-white">
                    Candideta Page
                </h1>
                <div className="mt-20 p-40">
                    <h3 className="text-orange-500 font-medium text-xl">
                        Tìm kiếm ứng viên
                    </h3>
                    <form action="search" className="mt-5 flex items-center">
                        <div className="relative w-full">
                            <input
                                type="search"
                                className="form-input w-full rounded-md pr-10"
                            />
                            <p className="absolute right-4 top-2.5 w-5 h-5">
                                <FontAwesomeIcon
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

                <SearchForm/>
                </div>
            </div>
        </section>
    );
}
