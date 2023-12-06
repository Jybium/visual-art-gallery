"use client";

import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import Steps from "./components/Steps";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();

  return (
    <AuthWrapper>
      {/* <section className="flex justify-between"> */}
      {/* <Steps /> */}
      {/* <div className={pathName === "/signup" ? "w-3/5" : "w-1/2"}> */}
      {children}
      {/* </div> */}
      {/* </section> */}
    </AuthWrapper>
  );
};

export default layout;
