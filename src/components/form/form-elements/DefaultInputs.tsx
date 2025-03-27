"use client";
import React, { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { CalenderIcon, ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import TextArea from "../input/TextArea";

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
 
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
      <div className="space-y-6">
        <div>
          <Label>Blog Title</Label>
          <Input type="text" />
        </div>
        <div>
          <Label htmlFor="datePicker">Blog Date</Label>
          <div className="relative">
            <Input
              type="date"
              id="datePicker"
              name="datePicker"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <CalenderIcon />
            </span>
          </div>
        </div>
        <div>
          <Label>Blog Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>
      </div>
  );
}
