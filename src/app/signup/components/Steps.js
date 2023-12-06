"use client";

import React, { useReducer } from "react";
import Step from "./Step";
import { authPage } from "@/constants/data";
import { Reducer } from "@/reducer/StepReducer";

const Steps = () => {
  // const [stage, dispatch] = useReducer(authPage, Reducer);
  return (
    <div className="grid place-items-start">
      {authPage.map((content) => (
        <Step
          key={content.id}
          title={content.title}
          completed={content.completed}
          number={content.id}
          hide={content.hide}
        />
      ))}
    </div>
  );
};

export default Steps;
