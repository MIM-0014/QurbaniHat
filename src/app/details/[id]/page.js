"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@heroui/react";
import { toast } from "react-hot-toast";

export default function DetailsPage() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id == id);
        setAnimal(found);
      });
  }, [id]);

  if (!animal) {
    return <p className="p-10">Loading...</p>;
  }

  const handleBooking = (e) => {
    e.preventDefault();

    toast.success("Booking successful!");

    e.target.reset();
  };

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-6">{animal.name}</h1>

      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <p className="mb-2">{animal.description}</p>
      <p className="font-semibold text-green-700 text-xl">
        ৳{animal.price}
      </p>

      {/* Booking Form */}
      <form
        onSubmit={handleBooking}
        className="mt-8 space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Phone"
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Address"
          required
          className="w-full border p-2 rounded"
        />

        <Button type="submit" color="success" className="w-full">
          Book Now
        </Button>
      </form>
    </div>
  );
}