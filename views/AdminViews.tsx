import StatCard from "@/components/StatCard";
import React from "react";

const AdminViews = () => {
  return (
    <div className="text-black flex min-h-screen">
      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        <StatCard title="Total of seats" value="500" color="bg-blue-400" />
        <StatCard title="Reserve" value="120" color="bg-green-400" />
        <StatCard title="Cancel" value="12" color="bg-red-400" />
      </div>
    </div>
  );
};

export default AdminViews;
