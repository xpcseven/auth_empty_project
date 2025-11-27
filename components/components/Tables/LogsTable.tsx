import React from "react";
import Search from "../Shared/Search";

const LogsTable = ({ currentItems }: any) => {
  const parsecurrentItems = JSON.parse(currentItems);
  return (
    <div>
      <h1 className="text-sky-600 text-2xl font-bold mr-1 text-center pr-2 mt-3">
        سجل حركات المستخدمين
      </h1>
      <Search placeholder="ابحث داخل سجل العمليات" />
      <table className=" text-center mr-1 ml-1 mt-5 font-semibold min-w-full mb-5 text-sm p-2">
        <thead className="bg-primary text-titlecolor border-b-2 border-yellow-500">
          <tr>
            <th></th>
            <th className="pt-2 pb-2">ت</th>
            <th className="pt-2 pb-2">نوع الحدث</th>
            <th className="pt-2 pb-2">اسم المستخدم </th>
            <th className="pt-2 pb-2">الجدول </th>
            <th className="pt-2 pb-2">الصف المعدل</th>
            <th className="pt-2 pb-2">ID</th>
            <th className="pt-2 pb-2">تاريخ الحدث </th>
          </tr>
        </thead>
        {parsecurrentItems.map((logData: any, index: number) => (
          <tbody key={logData.id}>
            <tr className="border-b border-gray-400">
              <td></td>
              <td className="p-1">{index + 1}</td>
              <td
                className={`${
                  logData.action === "DELETE"
                    ? "bg-red-200"
                    : logData.action === "CREATE"
                    ? "bg-green-200"
                    : logData.action === "UPDATE"
                    ? "bg-orange-200"
                    : ""
                }`}
              >
                {logData.action}
              </td>
              <td className="">{logData.username}</td>
              <td className="">{logData.tableName}</td>
              <td className="">{logData.recordName}</td>
              <td className="">{logData.recordId}</td>
              <td className="">{logData.createdAt}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default LogsTable;
