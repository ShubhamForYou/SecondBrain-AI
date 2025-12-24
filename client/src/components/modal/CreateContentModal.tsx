import { useRef, useState } from "react";
import { CloseButton } from "../../icons/CloseIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { BrainIcon } from "../../icons/BrainIcon";
import { BASE_URL } from "../../config";
import axios from "axios";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}
export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [select, setSelect] = useState("");
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    if (!title || !link) {
      alert("Please fill all the fields 🔴");
      return;
    }

    if (select === "") {
      alert("Please select type 🔴");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/content`,
        {
          title,
          link,
          type: select,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert(`${res.data.content.title} added successfully ✔️`);
      onClose();
    } catch (error: any) {
      alert(error.response.data.message);
      return;
    }
  }
  return (
    <div>
      {open && (
        <div className="h-full w-full fixed bg-[rgba(202,203,204,0.6)]">
          <div className="flex justify-center items-center h-full w-full ">
            <div
              className="bg-white opacity-100 p-6 rounded-md min-w-96 max-w-fit min-h-64
            flex flex-col justify-center items-center gap-6"
            >
              <div
                onClick={onClose}
                className="cursor-pointer flex justify-end w-full"
              >
                <CloseButton size="md" />
              </div>
              <div className="flex p-2 gap-2.5 justify-start w-full">
                <BrainIcon size="md" />
                <div className="text-gray-500">
                  SecondBrain.<span className="text-purple-600">AI</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 ">
                <Input
                  reference={titleRef}
                  placeholder={"Title"}
                  onChange={() => {}}
                />
                <Input
                  reference={linkRef}
                  placeholder={"Link"}
                  onChange={() => {}}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <span className="text-gray-400">Select type</span>
                <div className=" flex justify-center w-full gap-3.5 mt-1.5">
                  <Button
                    onClick={() => setSelect("twitter")}
                    size="sm"
                    startIcon={<TwitterIcon size="sm" />}
                    text="Twitter"
                    variant={select === "twitter" ? "primary" : "secondary"}
                  />
                  <Button
                    onClick={() => setSelect("youtube")}
                    size="sm"
                    startIcon={<YoutubeIcon size="sm" />}
                    text="Youtube"
                    variant={select === "youtube" ? "primary" : "secondary"}
                  />
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Button
                  onClick={addContent}
                  size="full"
                  variant="primary"
                  text="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
