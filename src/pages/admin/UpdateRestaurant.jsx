import { useParams, useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../../utils/localStorage";
import { useState } from "react";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurants = getRestaurants();
  const restaurant = restaurants.find(
    (r) => r.restaurantID === Number(id)
  );

  const [form, setForm] = useState(restaurant);

  const handleUpdate = () => {
    if (typeof window !== "undefined" && !window.confirm("Are you sure you want to update?")) return;

    const updated = restaurants.map((r) =>
      r.restaurantID === form.restaurantID ? form : r
    );
    saveRestaurants(updated);
    alert("Updated Successfully");
    navigate("/admin/dashboard");
  };

  return (
    <div className="center">
      <h2>Update Restaurant</h2>
      <input
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
      />
      <input
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
