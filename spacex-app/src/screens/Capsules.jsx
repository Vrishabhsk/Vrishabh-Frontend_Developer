import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCapsules } from "../api/requests";
import Capsule from "../components/Capsule";
import CustomFilter from "../components/CustomFilter";
import CustomSelect from "../components/CustomSelect";
import DetailedCapsule from "../components/DetailedCapsule";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { CAPSULE_STATUSES, CAPSULE_TYPES } from "../utils/constants";

export default function Capsules() {
  const [capsules, setCapsules] = useState([]);
  const [focusedCapsule, setFocusedCapsule] = useState({});
  const [viewCapsule, setViewCapsule] = useState(false);

  const [filters, setFilters] = useState({
    capsule_serial: "",
    launch: "",
    status: "",
    type: "",
  });

  const { isLoading, data } = useQuery(["capsules", filters], async () => fetchCapsules(filters));

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    console.log("data");
    if (data) setCapsules(data);
  }, [data]);

  return (
    <div className="min-h-screen bg-zinc-800 pt-[5rem] px-5">
      <div className="flex flex-row">
        <SearchBar
          title="Search via Capsule Serial"
          name="capsule_serial"
          onChange={handleFilterChange}
        />
        <CustomFilter
          title="Original Launch"
          name="launch"
          type="datetime-local"
          onChange={handleFilterChange}
          className="py-1 px-2 rounded-md mr-4"
        />
        <CustomSelect
          title="Status"
          name="status"
          className="py-1.5 px-2 rounded-md mr-4"
          options={CAPSULE_STATUSES}
          onChange={handleFilterChange}
        />
        <CustomSelect
          title="Capsule Type"
          name="type"
          className="py-1.5 px-2 rounded-md"
          options={CAPSULE_TYPES}
          onChange={handleFilterChange}
        />
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-wrap py-10 gap-20 justify-center">
          {capsules.length > 0 ? (
            capsules?.map((capsule, key) => (
              <Capsule
                key={key}
                capsule={capsule}
                selectCapsule={() => {
                  setFocusedCapsule(capsule);
                  setViewCapsule(true);
                }}
              />
            ))
          ) : (
            <div className="text-white text-xl mt-20">No Capsules to display.</div>
          )}
        </div>
      )}
      {viewCapsule && (
        <DetailedCapsule
          capsule={focusedCapsule}
          close={() => {
            setFocusedCapsule({});
            setViewCapsule(false);
          }}
        />
      )}
    </div>
  );
}
