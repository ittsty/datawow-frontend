"use client";
import { concertService } from "@/services/concert.service";
import { ReservationService } from "@/services/reservation.service";
import { useState } from "react";

type Concert = {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
};

type Props = {
  concert: Concert;
  isReserved: boolean;
  onSuccess: () => void;
};

export default function ReserveButton({ concert, isReserved ,onSuccess}: Props) {
  const [loading, setLoading] = useState(false);
  const isFull = concert.reservedSeats >= concert.totalSeats;
  async function handleReserve() {
    try {
      setLoading(true);
      await ReservationService.reserve(concert.id);
      onSuccess();
    } catch (err) {
      alert("จองไม่สำเร็จ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleCancel() {
    try {
      setLoading(true);
      await ReservationService.cancel(concert.id);
      onSuccess();
    } catch (err) {
      alert("ยกเลิกไม่สำเร็จ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  if (isFull && !isReserved) {
    return (
      <button
        disabled
        className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
      >
        เต็มแล้ว
      </button>
    );
  }

  if (isReserved) {
    return (
      <button
        onClick={handleCancel}
        disabled={loading}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        {loading ? "กำลังยกเลิก..." : "ยกเลิกจอง"}
      </button>
    );
  }

  return (
    <button
      onClick={handleReserve}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      {loading ? "กำลังจอง..." : "จอง"}
    </button>
  );
}
