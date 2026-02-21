const API = process.env.NEXT_PUBLIC_BACKEND_API;

function getUserId() {
  const uid = localStorage.getItem("userId");
  if (!uid) throw new Error("User not found");
  return uid;
}
export const ReservationService = {
  getHistory: async () => {
    try {
      const res = await fetch(`${API}/reservation`);
      if (!res.ok) {
        throw new Error("Failed to fetch history");
      }

      return res.json();
    } catch {
      throw new Error("Failed to fetch play history");
    }
  },
  getMyReservations: async (userId: string) => {
    try {
      const res = await fetch(`${API}/reservation/me/${userId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch history");
      }
      return res.json();
    } catch {
      throw new Error("Failed to fetch play history");
    }
  },
  reserve: async (concertId: string) => {
    const userId = getUserId();
    try {
      const res = await fetch(`${API}/reservation/${concertId}/${userId}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Reserve failed");
      return res.json();
    } catch {
      throw new Error("Failed to Connect API");
    }
  },
  cancel: async (concertId: string) => {
    const userId = getUserId();
    try {
      const res = await fetch(`${API}/reservation/${concertId}/${userId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Reserve failed");
      return res.json();
    } catch {
      throw new Error("Failed to Connect API");
    }
  },
};
