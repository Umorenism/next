"use client";

import { useState } from "react";
// import displaydata from "./displaydata";
import { Container } from "./Container";

export const Dispay = () => {
  return (
    <div className="container h-screen mx-auto p-4 ">
      <Container>
        <div className="bg-slate-500 mt-48 flex h-[300px]">
          <div className="w-[300px] showdow-lg bg-slate-50 h-full">img</div>
          <div className="w-[300px] showdow-lg bg-slate-500 h-full">img</div>
          <div className="w-[300px] showdow-lg bg-slate-50 h-full">img</div>
          <div className="w-[300px] showdow-lg bg-slate-500 h-full">img</div>
        </div>
      </Container>
    </div>
  );
};
