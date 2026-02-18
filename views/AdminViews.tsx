"use client";

import StatCard from "@/components/StatCard";
import { useState } from "react";
import ConcertOverview from "../components/ConcertOverview";
import ConcertCreate from "@/components/ConcertCreate";

type subview = "OVERVIEW" | "CREATE";

const AdminViews = () => {
  const [view, setview] = useState<subview>("OVERVIEW");
  return (
    <div className="text-black flex flex-col min-h-full">
      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        <StatCard title="Total of seats" value="500" color="bg-blue-400" />
        <StatCard title="Reserve" value="120" color="bg-green-400" />
        <StatCard title="Cancel" value="12" color="bg-red-400" />
      </div>
      <div className="flex gap-2 mb-4 w-full">
        <button
          className="px-4 py-2 text-gray-900  hover:bg-gray-300 rounded-lg shadow-md"
          onClick={() => setview("OVERVIEW")}
        >
          Overview
        </button>
        <button
          className="px-4 py-2 text-gray-900  hover:bg-gray-300 rounded-lg shadow-md"
          onClick={() => setview("CREATE")}
        >
          Create
        </button>
      </div>
      <div className="space-y-4">
        {view === "OVERVIEW" && <ConcertOverview />}
        {view === "CREATE" && <ConcertCreate />}
      </div>
    </div>
  );
};

export default AdminViews;
