import {useRef,useEffect} from "react";
const Navbar=({setSearch,setType,setParking})=>{
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return (
        <div className="navbar">
            <input ref={inputRef} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
            <select onChange={(e)=>setType(e.target.value)}>
                <option value="">All Types</option>
                <option>Rajasthani</option>
                <option>gujarathi</option>
                <option>mughlai</option>
                <option>jain</option>
                <option>Southindian</option>
                <option>Northindian</option>
            </select>
            <select onChange={(e)=>setParking(e.target.value)}>
                <option value="">All Parking</option>
                <option value="true">Parking</option>
                <option value="false">No Parking</option>
            </select>
        </div>
    );
};
export default Navbar;