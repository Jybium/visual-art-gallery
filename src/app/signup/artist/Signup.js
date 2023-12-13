import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { useSearchParams } from "next/navigation";
import { Text } from "@/app/components/InputFIeld";
import Button from "@/app/components/Button";

const signup = () => {
  const [search, SetSearch] = useSearchParams();
  const searchParams = search.get("stage");

  if (searchParams === "1")
    return (
      <section>
        <div>
          <IoPersonCircle />
          <div>
            <CiCirclePlus />
          </div>
        </div>
        <form>
          <Text />
          <Text />
          <Button
            classname="bg-blue-400 w-full text-[#fff] rounded-full mt-8"
            title="Continue"
          />
        </form>
      </section>
    );

  if (searchParams === "2") return <div></div>;
  if (searchParams === "3") return <div></div>;
  if (searchParams === "4") return <div></div>;
  if (searchParams === "5") return <div></div>;
  if (searchParams === "6") return <div></div>;
};

export default signup;
