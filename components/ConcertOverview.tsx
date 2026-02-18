import { Concerts } from "@/mock-db/concert";
const ConcertOverview = () => {
  return (
    <>
      {Concerts.map((concert) => (
        <div key={concert.id} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-blue-400 font-semibold">{concert.name}</h2>
          <hr className="my-2 text-gray-400" />
          <p className="text-gray-600 text-sm mb-4">{concert.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              {concert.seats}
            </span>
            <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ConcertOverview;
