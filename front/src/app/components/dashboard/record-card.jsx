import React from "react";
import { FaCarAlt } from "react-icons/fa";

const RecordCard = ({ transaction }) => {
  // const trColor=
  return (
    <tr className="flex items-center justify-between border-b">
      <div className="flex items-center">
        <th>
          <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
            <FaCarAlt className="text-white" />
          </div>
        </th>
        <div className="flex flex-col ">
          <td className="text-base font-normal p-0">{transaction?.name}</td>
          <td className="text-xs p-0">{transaction?.updated_at}</td>
        </div>
      </div>
      <td
        className={`${
          transaction.transaction_type === "INC"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {transaction?.amount}
      </td>
    </tr>
  );
};

export default RecordCard;
