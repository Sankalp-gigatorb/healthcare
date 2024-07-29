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

  const handleClick = async (applicationTypeId, programId) => {
    navigate("/data");
    const url = 'http://localhost:8080/Rest/v1/ua/application_form';
  
    try {
      const payload = {
        application_type_id: applicationTypeId,
        programs: [
          { programId }
        ]
      };
        console.log('Payload:', payload);
  
      const response = await axios.post(url, payload, {
        headers: {
          // Authorization: `Bearer : ${token}`, 
          "Content-Type": "application/json",
        },
      });
      console.log('Success:', response?.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <div className="w-3/4 mx-auto my-3 ">
        {data.map((item) =>
          item.intakeApplicationTypes.map((appType) => (
            <div key={appType.application_type_id} className="my-[2rem]">
              <MaterialCard
                title={appType.name}
                bodyText={appType.description}
                subtitle={appType.summary}
                buttonText={"Apply"}
                onClick={() => handleClick(appType.application_type_id, appType.programs[0]?.programId)}
              />
            </div>
          ))
        )}
      </div>
      <div className="w-3/4 mx-auto my-3">
        {data.map((item) =>
          item.onlineScreeningTypes.map((screeningType) => (
            <div key={screeningType.screeningTypeId} className="my-[2rem]">
              <MaterialCard
                title={screeningType.name}
                bodyText={screeningType.description}
                subtitle={screeningType.summary}
                buttonText={"Apply"}
                onClick={() => handleClick(
                  data.find(d => d.onlineScreeningTypes.some(st => st.screeningTypeId === screeningType.screeningTypeId))
                    ?.intakeApplicationTypes[0]?.application_type_id || '', 
                  screeningType.programs[0]?.programId || ''
                )}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Screening;
