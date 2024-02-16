// import axios from "axios";

// export const Balance = ( {showBalance} ) => {
//     async function checkBalance() {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "https://localhost:3000/api/v1/account/balance",
//           {
//             headers: {
//               Authorization: "Bearer " + token,
//             },
//           }
//         );
    
//         showBalance(response.data.balance);
//       }
    
//     return <div className="flex">
//         <div className="font-bold text-lg">
//             Your balance
//         </div>
//         <div className="font-semibold ml-4 text-lg">
//             Rs {checkBalance}
//         </div>
//     </div>
// }


import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = ({ value }) => {
  const [balance, setBalance] = useState(null);

  async function checkBalance() {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:3000/api/v1/account/balance",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    setBalance(response.data.balance);
    value(response.data.balance);
  }

  useEffect(() => {
    checkBalance();
  }, []); // Run once on component mount

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        Rs {balance !== null ? balance.toFixed(2) : "Loading..."}
      </div>
    </div>
  );
};
