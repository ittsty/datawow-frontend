const API = process.env.NEXT_PUBLIC_BACKEND_API;

export const concertService = {
  getConcerts: async () => {
    try {
      const res = await fetch(`${API}/concert`);
      if (!res.ok) {
        throw new Error("Failed to fetch history");
      }
      return res.json();
    } catch {
      throw new Error("Failed to Connect API");
    }
  },
  createConcert: async (data: {name: string; totalSeats: number; description: string; }) => {
    try {
      const res = await fetch(`${API}/concert/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to create concert");
      }
      return res.json();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to connect API");
    }
  },
  deleteConcert: async (id: string) => {
    try {
      const res = await fetch(`${API}/concert/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete concert");
      }
      return res.json();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to connect API");
    }
  },
};
