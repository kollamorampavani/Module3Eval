import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  const handleAdd = () => {
    if (!form.restaurantName || !form.address || !form.type) {
      alert("Fill all fields");
      return;
    }

    const newRestaurant = {
      ...form,
      parkingLot: form.parkingLot === "true",
      restaurantID: Date.now(),
    };

    const updated = [...restaurants, newRestaurant];
    saveRestaurants(updated);
    setRestaurants(updated);
    alert("Restaurant Added");
    setForm({ ...form, restaurantName: "", address: "" });
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId === null) return;
    const updated = restaurants.filter((r) => r.restaurantID !== deleteId);
    saveRestaurants(updated);
    setRestaurants(updated);
    alert("Deleted Successfully");
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <>
      <Navbar />
      <div className="layout">
        <div className="sidebar">
          <input
            placeholder="Name"
            value={form.restaurantName}
            onChange={(e) =>
              setForm({ ...form, restaurantName: e.target.value })
            }
          />
          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="">Select Type</option>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughlai</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
          </select>

          <select
            onChange={(e) =>
              setForm({ ...form, parkingLot: e.target.value })
            }
          >
            <option value="">Parking</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button onClick={handleAdd}>Add Restaurant</button>
        </div>

        <div className="grid">
          {restaurants.map((r) => (
            <RestaurantCard
              key={r.restaurantID}
              data={r}
              isAdmin
              onDelete={handleDelete}
              onUpdate={(id) =>
                navigate(`/admin/restaurants/update/${id}`)
              }
            />
          ))}
        </div>
      </div>
      {deleteId !== null && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
