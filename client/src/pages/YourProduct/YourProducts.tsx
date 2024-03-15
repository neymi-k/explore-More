import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { fetchProductsBySeller } from "../../services/product.service";

interface Trip {
  id: number;
  name: string;
  description: string;
  price: number;
  places: number;
  category: string;
  image: string;
  date: string;
}
function YourProducts() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserId(user.id);
    }
  }, []);

  useEffect(() => {
    const fetchTrips = async () => {
      if (userId) {
        const products = await fetchProductsBySeller(userId);
        setTrips(products);
      }
    };
    fetchTrips();
  }, [userId]);

  return (
    <div>
      {trips.map((trip) => (
        <CardProduct key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default YourProducts;
