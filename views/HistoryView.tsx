"use client";
import { ReservationService } from "@/services/reservation.service";
import { useEffect, useState } from "react";

type HistoryItem = {
  id: string;
  username: string;
  concertName: string;
  action: "RESERVE" | "CANCEL";
  createdAt: string;
};

const HistoryView = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const data = await ReservationService.getHistory();
      setHistory(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-semibold mb-4 text-black">
        Reservation History
      </h1>
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="p-3 border">Date time</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Concert name</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 text-black">
                <td className="p-3 border">
                  {new Date(item.createdAt).toLocaleString("th-TH", {
                    year: "2-digit",
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="p-3 border">{item.id}</td>
                <td className="p-3 border">{item.concertName}</td>
                <td className="p-3 border">{item.action}</td>
              </tr>
            ))}

            {history.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No history found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryView;
