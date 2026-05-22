"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card } from "@heroui/react";

export default function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const featured = animals.slice(0, 4);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          QurbaniHat Marketplace
        </h1>
        <p className="mt-4 text-lg">
          Find healthy cows and goats for Qurbani easily
        </p>

        <Link href="/animals">
          <Button className="mt-6" color="primary">
            Browse Animals
          </Button>
        </Link>
      </section>

      {/* FEATURED ANIMALS */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Animals
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {featured.map((animal) => (
           <Card key={animal.id} className="shadow-lg p-3">
 <img
  src={animal.image}
  alt={animal.name}
  className="h-40 w-full object-cover rounded-lg"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300";
  }}
/>

  <h3 className="font-bold mt-3">{animal.name}</h3>
  <p className="text-sm text-gray-600">{animal.location}</p>

  <p className="font-semibold text-green-700">
    ৳{animal.price}
  </p>

  <Link href={`/details/${animal.id}`}>
    <Button size="sm" className="mt-3 w-full">
      View Details
    </Button>
  </Link>
</Card>
          ))}
        </div>
      </section>

      {/* QURBANI TIPS */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Qurbani Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              Choose healthy and active animals only.
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              Check age and weight before buying.
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              Ensure proper vaccination and care.
            </div>
          </div>
        </div>
      </section>

      {/* TOP BREEDS */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Breeds
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl">Deshi Cow</div>
          <div className="p-6 border rounded-xl">Sahiwal Cow</div>
          <div className="p-6 border rounded-xl">Black Bengal Goat</div>
        </div>
      </section>

    </div>
  );
}