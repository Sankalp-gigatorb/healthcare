import axios from "axios";
import React, { useEffect, useState } from "react";
import MaterialCard from "../component/Card/MaterialCard.tsx";
import { useNavigate } from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("/data/data.json",{
        method:"GET",
        headers:{
          // Authorization:`Bearer : ${token}`,
          "Content-Type":"application/json"
        }
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data, "dat");

  useEffect(() => {
    fetchData();
  }, []);

  const handleApplyClick = () => {
    navigate("/screening");
  };

  return (
    <div className="">
    <div className="w-3/4 mx-auto my-3 ">
      {data.map((item) => (
        <div className="my-[2rem]">
          <MaterialCard
            title={item.name}
            bodyText={item.description}
            buttonText={<DoubleArrowIcon />}
            onClick={handleApplyClick}
          />
        </div>
      ))}
    </div></div>
  );
};

export default Home;
