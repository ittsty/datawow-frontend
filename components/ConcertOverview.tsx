import { Concerts } from "@/mock-db/concert";
import { concertService } from "@/services/concert.service";
import { useEffect, useState } from "react";

type Concert = {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
};

const ConcertOverview = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchConcerts();
  }, []);

  async function fetchConcerts() {
    setLoading(true);
    try {
      const concertData = await concertService.getConcerts();
      setConcerts(concertData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Are you sure to delete?");
    if (!confirmDelete) return;
    try {
      await concertService.deleteConcert(id);
      fetchConcerts();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }
  return (
    <>
      {concerts.map((concert) => (
        <div key={concert.id} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-blue-400 font-semibold">{concert.name}</h2>
          <hr className="my-2 text-gray-400" />
          <p className="text-gray-600 text-sm mb-4">{concert.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              {concert.totalSeats}
            </span>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              onClick={() => handleDelete(concert.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ConcertOverview;
