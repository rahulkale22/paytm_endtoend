// import toast, { Toaster } from "react-hot-toast";
// import { Appbar } from "../components/Appbar"
// import { Balance } from "../components/Balance"
// import { Users } from "../components/Users"


// export const Dashboard = () => {
//     function showBalance(balance) {
//         toast(`${balance}rs`);
//       }
//     return <div>
//         <Appbar />
//         <div className="m-8">
//             <Balance value={showBalance} />
//             <Users />
//         </div>
//     </div>
// }

import toast from "react-hot-toast";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  function showBalance(balance) {
    toast(`${balance}rs`);
  }

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={showBalance} />
        <Users />
      </div>
    </div>
  );
};
