import { FormAutoCompleted } from './Form';
export interface EvaluateUserProps {}

export function EvaluateUser() {
    return (
        <div className="mt-20 border border-slate-300 rounded-lg">
            <div className="p-5">
                <h2 className="font-bold text-2xl">Đánh giá ứng viên</h2>
                <div className="mt-3 border border-slate-600 rounded-lg">
                    <div className="p-2 block">
                        <div className="recomment">
                            <ul className="flex items-cente cursor-pointer">
                                <li className="p-1.5 bg-slate-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">Ứng viên sáng giá</li>
                                <li className="p-1.5 bg-orange-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">Có tiềm năng</li>
                                <li className="p-1.5 bg-green-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg mr-2">Nên tuyển dụng</li>
                                <li className="p-1.5 bg-purple-500 border border-gray-50 hover:text-black hover:bg-white hover:border text-white rounded-lg ">Không nên tuyển dụng</li>
                            </ul>
                        </div>
                        <form className="mt-5">
                          <FormAutoCompleted/>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
