"use client";

import StatCard from "@/components/StatCard";
import { useEffect, useState } from "react";
import ConcertOverview from "../components/ConcertOverview";
import ConcertCreate from "@/components/ConcertCreate";
import { ReservationService } from "@/services/reservation.service";

type subview = "OVERVIEW" | "CREATE";

const AdminView = () => {
  const [view, setview] = useState<subview>("OVERVIEW");
  const [stats, setStats] = useState({
    totalSeats: 0,
    reserveCount: 0,
    cancelCount: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    const data = await ReservationService.getStats();
    setStats(data);
  }
  return (
    <div className="text-black flex flex-col min-h-full">
      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        <StatCard title="Total of seats" value={stats.totalSeats} color="bg-blue-400" />
        <StatCard title="Reserve" value={stats.reserveCount} color="bg-green-400" />
        <StatCard title="Cancel" value={stats.cancelCount} color="bg-red-400" />
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

export default AdminView;
