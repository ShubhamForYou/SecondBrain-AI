import { CloseButton } from "../../icons/CloseIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}
export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed bg-[rgba(202,203,204,0.6)]">
          <div className="flex justify-center items-center h-full ">
            <div
              className="bg-white opacity-100 py-6 px-12 rounded-md min-w-96 max-w-fit min-h-64
            flex flex-col justify-center items-center gap-6"
            >
              <div
                onClick={onClose}
                className="cursor-pointer flex justify-end w-full"
              >
                <CloseButton size="md" />
              </div>

              <div className="flex flex-col gap-4 ">
                <Input placeholder={"Title"} onChange={() => {}} />
                <Input placeholder={"Link"} onChange={() => {}} />
                <div className="flex justify-center">
                  <Button size="md" variant="primary" text="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
