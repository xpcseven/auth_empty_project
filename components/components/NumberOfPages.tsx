import { Select } from "@mui/material";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React from "react";

function NumberOfPages() {
  return (
    <div className="mt-1 p-1">
      <Select>
        <SelectTrigger
          className="border rounded-none mt-2 font-cairo"
          dir="rtl"
        >
          <SelectValue placeholder="عناصر الصفحة" />
        </SelectTrigger>
        <SelectContent className="bg-gray-400">
          <SelectItem className=" hover:bg-gray-500 font-cairo" value="20">
            عناصر الصفحة
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="30">
            30
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="35">
            35
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="40">
            40
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="45">
            45
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="50">
            50
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="100">
            100
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="150">
            150
          </SelectItem>
          <SelectItem className=" hover:bg-gray-500" value="200">
            200
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default NumberOfPages;
