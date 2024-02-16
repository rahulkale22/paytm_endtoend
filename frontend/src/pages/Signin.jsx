// import { useState } from "react";
// import { BottomWarning } from "../components/BottomWarning"
// import { Button } from "../components/Button"
// import { Heading } from "../components/Heading"
// import { InputBox } from "../components/InputBox"
// import { SubHeading } from "../components/SubHeading"
// import { useNavigate } from "react-router-dom";

// import axios from "axios";

// export const Signin = () => {
//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign in"} />
//         <SubHeading label={"Enter your credentials to access your account"} />
//         <InputBox placeholder="xyz@gmail.com" label={"Email"} />
//         <InputBox placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button label={"Sign in"} />
//         </div>
//         <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
//       </div>
//     </div>
//   </div>
// }



import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom";

import axios from "axios";

export function Signin({ toast }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function singInFuntion() {
    axios
      .post(
        "http://localhost/3000/api/v1/user/signin",
        {
          username,
          password,
        }
      )
      .then(function (response) {
        response.status === 200 && toast.success("Signed in successfully");
        const authToken = response.data.token;
        localStorage.setItem("token", authToken);
        navigate(`/dashboard?name=${response.data.firstName.split(" ")[0]}`);
      })
      .catch(function (error) {
        error.response.status === 400
          ? toast.error("Please fill the input fields correctly!")
          : error.response.status === 404
          ? toast.error("Username does not exist!")
          : error.response.status === 401
          ? toast.error("Incorrect password!")
          : error.response.status === 500
          ? toast.error("Somthing went wronge!")
          : null;
      });
  }


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        
        <InputBox placeholder="xyz@gmail.com" label={"Email"} onChange={(e) => setUsername(e.target.value)} />
        
        <InputBox placeholder="123456" label={"Password"} onChange={(e) => setPassword(e.target.value)} />
       
        <div className="pt-4">
          <Button label={"Sign in"} onClick={singInFuntion}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}