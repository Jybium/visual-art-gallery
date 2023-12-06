"use client";

import { useState, useEffect } from "react";
import { GrView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";
import React from "react";
import Link from "next/link";

export const Password = ({
  title,
  placeholder,
  register,
  error,
  required,
  name,
  classname,
}) => {
  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={title}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 8,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          id={title}
          className="mt-1  rounded-md  placeholder:text-xs border-[1.3px] border-[#C7C7C7] font-regular text-slate-600 w-full relative active:border-blue-500 text-sm"
          placeholder={placeholder}
        />
        <span onClick={showPassword} className="absolute right-2 bottom-2">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-gray-400 font-bold text-xs mt-1">
          Minimum of 8 characters.
        </p>
        <p className="text-gray-400 font-bold text-xs mt-1">
          Number or Lowercase
        </p>
      </div>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {error[name] && error[name].type === "checkLength" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be up to eight characters
        </p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
    </div>
  );
};
export const PasswordLogin = ({
  title,
  placeholder,
  error,
  register,
  name,
  classname,
}) => {
  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full grid relative">
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={title}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 8,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          id={title}
          className="mt-1 rounded-md  placeholder:text-xs border-[1px] border-[#C7C7C7] placeholder:font-regular font-regular text-slate-600 w-full relative"
          placeholder={placeholder}
        />
        <span onClick={showPassword} className="absolute right-2 bottom-3">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {error[name] && error[name].type === "checkLength" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be up to eight characters
        </p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left break-words">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="px-2 py-3" />
          <p className="text-xs text-[#C7C7C7] font-bold">Remember me</p>
        </div>
        <Link href="/forgot-password">
          <p className="text-blue-500 font-bold text-xs text-right">
            Forgot Password?
          </p>
        </Link>
      </div>
    </div>
  );
};

export const Checkbox = ({
  title,
  type,
  // placeholder,
  register,
  error,
  name,
  required,
  className,
}) => {
  return (
    <div className="w-full mt-5">
      <div className="flex items-center gap-3 text-center justify-center">
        <input
          type={type || "text"}
          {...register(name, { required: true })}
          name={name}
          id={name}
          className="mt-1 rounded-md  placeholder:text-xs border-[2px] border-[#C7C7C7] placeholder:font-regular font-regular text-slate-600 w-5 h-5 text-sm  "
          // placeholder={placeholder}
        />
        <p className="text-center w-auto">
          I Accept the <Link href="/terms">Terms and Conditions</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left mt-1">{`${name} is required.`}</p>
      )}
    </div>
  );
};

export const Text = ({
  title,
  type,
  placeholder,
  register,
  error,
  name,
  required,
  className,
}) => {
  return (
    <div className="w-full">
      <input
        type={type || "text"}
        {...register(name, { required: true })}
        name={name}
        id={name}
        className="mt-1 rounded-md  placeholder:text-xs border-[1px] border-[#C7C7C7] placeholder:font-regular font-regular text-slate-600 w-full text-sm  "
        placeholder={placeholder}
      />

      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left mt-1">{`${name} is required.`}</p>
      )}
    </div>
  );
};

export const Select = ({ title, register, error, children, name, onclick }) => {
  return (
    <div className="w-full">
      <select
        name={name}
        id={name}
        {...register(name, { required: true })}
        className="mt-1 rounded bg-[#E6EEE6] placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full "
      >
        <option value="">Select location</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
      </select>

      <p
        className="font-black text-blue-500 text-sm cursor-pointer mt-1"
        onClick={() => onclick()}
      >
        {children}
      </p>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold">{`${title} is required.`}</p>
      )}
    </div>
  );
};
