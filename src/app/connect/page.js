"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Logo from "../../../public/logo.png";
import Log from "../../../public/log.png";
import { PasswordLogin, Text } from "../components/InputFIeld";
import Button from "../components/Button";

const page = () => {
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
    <main className="min-h-screen p-6 px-10">
      <div className="flex items-end text-sm  inter.classname">
        <Image
          src={Logo}
          alt="Nexus logo"
          width={30}
          objectFit="contain"
          objectPosition="center"
        />
        <span>ecoArt Exchange</span>
      </div>
      <section className="w-1/2 text-center mx-auto h-4/6 mt-20">
        <div className="text-center grid justify-center">
          <div>
            <Image
              src={Log}
              alt="Nexus logo"
              width={40}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          {/* <div>
            <h1>Welcome Back</h1>
            <p>
              Don't have an account? <Link href="/signup">Sign Up</Link>
            </p>
          </div> */}
        </div>
        <form onSubmit={handleSubmit(submit)} className="w-full mt-10">
          <div className="text-center">
            <h1 className="font-bold text-xl tracking-wider">Welcome Back</h1>
            <p className="text-[#7C7C7C] text-xs mt-2">
              Don't have an account? <Link href="/signup">Signup</Link>
            </p>
          </div>
          <section className="grid gap-4 w-full">
            {/* FOR THE PHOTO ICON */}
            <div>
              {/* FOR THE PLUS ICON TO ADD PICTURE */}
              <div></div>
            </div>
            {/* FOR INPUT FIELDS */}

            <Text
              // title="Email or Phone Number"
              placeholder="Email Address"
              type="email"
              register={register}
              error={errors}
              name="Email Address"
            />

            <PasswordLogin
              // title="Password"
              placeholder="*************"
              register={register}
              name="password"
              error={errors}
            />
          </section>
          <Button
            classname="bg-blue-400 w-full text-[#fff] rounded-sm  mt-8"
            title="Login"
          />
        </form>
      </section>
    </main>
  );
};

export default page;
