"use client";

import ReserveButton from "@/components/ReserveButton";
import { concertService } from "@/services/concert.service";
import { ReservationService } from "@/services/reservation.service";
import { useEffect, useState } from "react";
type Concert = {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
};

const HomeViews = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [reservedConcertIds, setReservedConcertIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConcerts();
  }, []);

  async function fetchConcerts() {
    try {
      setLoading(true);

      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("User not found");
        return;
      }
      const concertData = await concertService.getConcerts();
      const myReservations =
        await ReservationService.getMyReservations(userId);
      setConcerts(concertData);
      setReservedConcertIds(myReservations);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  return (
    <div className="text-black">
      {concerts.map((concert) => (
        <div key={concert.id} className="bg-white p-6 rounded shadow-sm mb-4">
          <h2 className="text-blue-400 font-semibold text-3xl">
            {concert.name}
          </h2>
          <hr className="my-2 text-gray-400" />
          <p className="text-gray-600 text-sm mb-4">{concert.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              {concert.totalSeats}
            </span>
            <ReserveButton
              concert={concert}
              isReserved={reservedConcertIds.includes(concert.id)}
              onSuccess={fetchConcerts}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeViews;
