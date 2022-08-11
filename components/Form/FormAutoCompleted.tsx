export interface FormAutoCompletedProps {}

export function FormAutoCompleted() {
    return (
        <div>
            <input
                type="text"
                placeholder="Viết đánh giá tại đây"
                className="w-full rounded-lg border-none focus:ring-white"
            />
        </div>
    );
}
