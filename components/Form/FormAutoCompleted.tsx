import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface FormAutoCompletedProps {}

export function FormAutoCompleted() {
    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Viết đánh giá tại đây"
                className="w-full rounded-lg border-none focus:ring-white"
            />
            <p className="mr-4 w-5 h-5">
                <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
            </p>
        </div>
    );
}
