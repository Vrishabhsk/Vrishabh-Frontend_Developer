import React from "react";

export default function DetailedCapsule({ capsule, close }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-72 w-screen">
          <div className="border-0 rounded-lg shadow-2xl text-white relative flex flex-col w-full bg-zinc-900 outline-none focus:outline-none">
            <div className="bg-zinc-700 rounded-xl shadow-xl m-2">
              <img src="/images/dummy.svg" className="mx-auto p-2 rounded-md w-1/5" alt="capsule" />
            </div>
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">&#9775; Capsule: {capsule?.capsule_serial}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={close}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative px-6 pb-6 flex-auto">
              <p className="mt-4 text-lg">
                <b>&#9964; Status: </b>
                {capsule?.status.charAt(0).toUpperCase() + capsule?.status.slice(1)}
              </p>
              <p className="mt-2 text-lg">
                <b>&#9964; Type: </b>
                {capsule?.type}
              </p>
              <p className="mt-2 text-lg">
                <b>&#9964; Landings: </b>
                {capsule?.landings}
              </p>
              <p className="mt-2 text-lg">
                <b>&#9964; Launch Date: </b>
                {capsule?.original_launch ? new Date(capsule?.original_launch).toString() : "N/A"}
              </p>
              <p className="mt-2 text-lg">
                <b>&#9964; Details: </b>
                {capsule?.details ? capsule?.details : "N/A"}
              </p>
              <p className="mt-2 text-lg">
                <b>&#9964; Missions: </b>
                <div className="pl-8 mt-2">
                  {capsule?.missions && capsule?.missions.length > 0
                    ? capsule?.missions?.map((mission) => (
                        <p key={mission?.name}>
                          {mission?.name} (Flight: {mission?.flight})
                        </p>
                      ))
                    : "N/A"}
                </div>
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="rounded-md bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
