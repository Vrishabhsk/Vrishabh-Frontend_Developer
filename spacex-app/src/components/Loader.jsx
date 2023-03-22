import React from "react";

export default function Loader() {
  return (
    <div className="text-center pt-[5rem]">
      <div
        class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-zinc-500 shadow-xl border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
    </div>
  );
}
