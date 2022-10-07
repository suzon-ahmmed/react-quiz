import React from "react";

export default function SkletonCard({ id }) {
  return (
    <div className="bg-white dark:bg-slate-800  px-2 pt-2 pb-4 rounded skeleton">
      <div className="h-[180px] bg-slate-200 dark:bg-slate-700 rounded-lg w-full"></div>
      <div className="h-6  w-full bg-slate-200 dark:bg-slate-700 mt-4 mb-2 rounded-lg"></div>
      <div className="h-6  w-full bg-slate-200 dark:bg-slate-700 mb-16 rounded-lg"></div>
      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 float-left  rounded-lg"></div>
      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 float-right rounded-lg"></div>
    </div>
  );
}
