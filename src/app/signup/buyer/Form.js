"use client";

import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { Checkbox, Password, Text } from "@/app/components/InputFIeld";
import React from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const navigate = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    navigate.push("/signup/buyer/artist");
  };
  return (
    <main className="w-full grid">
      <form onSubmit={handleSubmit(submit)} className="w-full">
        <div className="text-center">
          <h1 className="font-bold text-xl tracking-wider">
            Create account with DecoArt Exchange
          </h1>
          <p
            className="text-[#7C7C7C] text-xs mt-2 line-clamp-2 break-words w-[60%] m-auto"
            style={{ lineHeight: "1.5" }}
          >
            Sign up is simple and free, it’s the largest platform to manage your
            art
          </p>
        </div>
        <section className="grid gap-3 w-full">
          {/* FOR THE PHOTO ICON */}
          <div>
            {/* FOR THE PLUS ICON TO ADD PICTURE */}
            <div></div>
          </div>
          {/* FOR INPUT FIELDS */}
          <Text
            // title="Email or Phone Number"
            placeholder="Full Name"
            type="text"
            register={register}
            error={errors}
            name="Full Name"
          />
          <div>
            <Text
              // title="Email or Phone Number"
              placeholder="Email Address"
              type="email"
              register={register}
              error={errors}
              name="Email Address"
            />
            <p className="text-xs text-red-600 mt-2">
              Please enter the correct email-{" "}
              <span className="text-[#7C7C7C]">
                {" "}
                ‘For example you@gmail.com’
              </span>
            </p>
          </div>
          <Password
            // title="Password"
            placeholder="*************"
            register={register}
            name="password"
            error={errors}
          />
        </section>
        <Button
          classname="bg-blue-400 w-full text-[#fff] rounded-full mt-8"
          title="Continue"
          // onclick={null}
        />
        {/* <button
          type="submit"
          classname="bg-blue-400 w-full text-[#fff] rounded-full mt-8"
        >
          Continue
        </button> */}
      </form>
      <Checkbox
        register={register}
        name="accept"
        error={errors}
        type="checkbox"
      />
    </main>
  );
};

export default Form;
