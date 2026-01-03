import { useEffect, useState } from "react";
import { getRestaurants } from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";
import Navbar from "../../components/Navbar";

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid">
        {restaurants.map((r) => (
          <RestaurantCard key={r.restaurantID} data={r} />
        ))}
      </div>
    </>
  );
};

export default CustomerDashboard;
