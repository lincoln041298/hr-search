import { faCaretRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ImgSend from "@/public/send.svg";
export interface FormAutoCompletedProps {}

export function FormAutoCompleted({ handleOnChange, title }: any) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        onChange={handleOnChange()}
        value={title}
        placeholder="Viết đánh giá tại đây"
        className="w-full rounded-lg border-none focus:ring-white"
      />
      <p className="mr-4 w-5 h-5">
        <Image alt="avt" src={ImgSend}></Image>
      </p>
    </div>
  );
}
