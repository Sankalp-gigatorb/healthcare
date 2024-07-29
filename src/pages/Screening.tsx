import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialCard from "../component/Card/MaterialCard.tsx";

const Screening = () => {
     const [data, setData] = useState([]);
     const navigate = useNavigate();

     const fetchData = async () => {
       try {
         const response = await axios.get("/data/data.json");
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
   
       const url = 'http://localhost:8080/Rest/v1/ua/application_form';
       const payload = {
         application_type_id: '2000441',
         programs: [
           { programId: '2000200' }
         ]
       };
       axios.post(url, payload)
         .then(response => {
           console.log('Success:', response.data);
   
         })
   
         .catch(error => {
           console.error('Error:', error);
         });
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
                buttonText={"Apsxply"}
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
