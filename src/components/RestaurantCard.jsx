const RestaurantCard=({data,isAdmin,onDelete,onUpdate})=>{
    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>Type: {data.type}</p>
            <p>Parking: {data.ParkingLot ? "Available" : "Not Available"}</p>
            {isAdmin && (
                <>
                <button onClick={()=>
                    onUpdate(data.restaurantID)}>Update</button>
                <button onClick={()=>
                    onDelete(data.restaurantID)}>Delete</button>
                </>
            )}

            </div>
    );
};
export default RestaurantCard;