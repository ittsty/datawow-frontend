"use client";

import { useState } from "react";

const ConcertCreate = () => {
  const [form, setForm] = useState({
    name: "",
    totalSeat: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Create concert:", form);
  };
  return (
    <div className="bg-white p-4 rounded shadow-sm gap-4">
      <h2 className="text-blue-400 font-semibold text-3xl">Create</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg mb-1">Concert Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="please input concert name"
              required
              className="p-2 w-full border text-sm border-gray-300 rounded-xl bg-gray-50 text-gray-800 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:shadow-sm"
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Total of seat</label>
            <input
              type="number"
              name="totalSeat"
              value={form.totalSeat}
              onChange={handleChange}
              className="p-2 w-full border text-sm border-gray-300 rounded-xl bg-gray-50 text-gray-800 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:shadow-sm"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Please input description"
            rows={4}
            className="p-2 w-full border text-sm border-gray-300 rounded-xl bg-gray-50 text-gray-800 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:shadow-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConcertCreate;
