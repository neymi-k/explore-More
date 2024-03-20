import React, { useState, useEffect } from "react";
import Info from "../../components/info/info";
import TravelCard from "../../components/TravelCard/TravelCard";
import { fetchProducts } from "../../services/product.service";

export interface HomeProps {
  id: number;
  trip_name: string;
  trip_description: string;
  price: number;
  img: string;
  places: number;
  date_trip: string;
  category: string;
  user_id: number;
}
const Home: React.FC<HomeProps> = () => {
  const [trips, setTrips] = useState<HomeProps[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setTrips(data));
  }, []);

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url(./fondo1.jpg)]"></div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Home
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {trips.map((trip) => (
            <TravelCard key={trip.id} trip={trip} />
          ))}
        </div>
        <div>
          <Info />
        </div>
      </section>
    </div>
  );
};

export default Home;
