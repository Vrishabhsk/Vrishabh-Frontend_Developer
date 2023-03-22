import React from "react";

export default function Capsule({ capsule, selectCapsule }) {
  return (
    <div class="shadow-card flex flex-col w-1/5 shadow-xl rounded-xl bg-zinc-500 bg-clip-border">
      <div className="bg-zinc-600 rounded-xl shadow-xl m-2">
        <img src="/images/dummy.svg" className="mx-auto p-2 rounded-xl w-2/5" alt="capsule" />
      </div>
      <div class="text-secondary flex-1 px-6 pb-6">
        <div>
          <h4 class="font-medium">
            <b>Capsule:</b> {capsule?.capsule_serial}
          </h4>
        </div>
        <p>
          <b>Status: </b>
          {capsule?.status}
        </p>
        <p>
          <b>Type: </b>
          {capsule?.type}
        </p>
        <p>
          <b>Original Launch: </b>
          {capsule?.original_launch
            ? new Date(capsule?.original_launch).toLocaleDateString()
            : "N/A"}
        </p>
        <button
          onClick={selectCapsule}
          className="middle none mt-2 center rounded-lg bg-zinc-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-2xl"
        >
          Expand
        </button>
      </div>
    </div>
  );
}
