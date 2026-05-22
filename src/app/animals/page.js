"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Card } from "@heroui/react";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const sortedAnimals = [...animals].sort((a, b) => {
    return sortOrder === "asc"
      ? a.price - b.price
      : b.price - a.price;
  });

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Animals</h1>

        {/* Sort Button */}
        <Button
          color="primary"
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          Sort by Price: {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </Button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {sortedAnimals.map((animal) => (
          <Card key={animal.id} className="p-4 shadow-md">

            <img
              src={animal.image}
              alt={animal.name}
              className="h-48 w-full object-cover rounded-lg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />

            <h2 className="text-xl font-bold mt-3">
              {animal.name}
            </h2>

            <p className="text-gray-600 text-sm">
              {animal.type} • {animal.location}
            </p>

            <p className="text-green-700 font-semibold mt-1">
              ৳{animal.price}
            </p>

            <Link href={`/details/${animal.id}`}>
              <Button className="w-full mt-3" color="success">
                View Details
              </Button>
            </Link>

          </Card>
        ))}
      </div>
    </div>
  );
}