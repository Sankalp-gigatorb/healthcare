import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialCard from "../component/Card/MaterialCard.tsx";

const Screening = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("/data/data.json", {
        method: "GET",
        headers: {
          // Authorization:`Bearer : ${token}`,
          "Content-Type": "application/json",
        },
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

  const handleClick = () => {
    navigate("/data");
    try {
      const payload = {
        application_type_id: "2000441",
        programs: [{ programId: "2000200" }],
      };
      const res = axios.post("/data/data.json", payload, {
        method: "POST",
        headers: {
          // Authorization:`Bearer : ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="w-3/4 mx-auto my-3">
        {data.map((item) =>
          item.intakeApplicationTypes.map((item) => (
            <div className="my-[2rem]">
              <MaterialCard
                title={item.name}
                bodyText={item.description}
                subtitle={item.summary}
                buttonText={"Apply"}
                onClick={handleClick}
              />
            </div>
          ))
        )}
      </div>
      <div className="w-3/4 mx-auto my-3">
        {data.map((item) =>
          item.onlineScreeningTypes.map((item) => (
            <div className="my-[2rem]">
              <MaterialCard
                title={item.name}
                bodyText={item.description}
                subtitle={item.summary}
                buttonText={"Apply"}
                onClick={handleClick}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Screening;
