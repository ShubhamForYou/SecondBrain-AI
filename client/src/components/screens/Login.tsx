import { useRef } from "react";
import { BrainIcon } from "../../icons/BrainIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { BASE_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  async function login() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("jwt", res.data.token);

      alert("User logged in successfully ✔️");
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="flex flex-col  h-screen w-screen justify-center items-center ">
      <div className="text-purple-800 bg-gray-200 min-h-8 p-1 min-w-96 text-center text-2xl rounded-t-md">
        <span>Log-in</span>
      </div>
      <div className="bg-gray-100  rounded-b-md overflow-hidden min-w-96 min-h-64 ">
        <div className="flex p-2 gap-2.5">
          <BrainIcon size="md" />
          <div className="text-gray-500">
            SecondBrain.<span className="text-purple-600">AI</span>
          </div>
        </div>
        <div>
          <div className=" flex mt-8 items-center flex-col gap-8 ">
            <Input
              reference={usernameRef}
              placeholder="USERNAME"
              onChange={() => {}}
            />
            <Input
              reference={passwordRef}
              placeholder="PASSWORD"
              onChange={() => {}}
            />
          </div>
          <div className="flex  mt-8">
            <Button
              onClick={login}
              size="full"
              variant="primary"
              text="LOG-IN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
