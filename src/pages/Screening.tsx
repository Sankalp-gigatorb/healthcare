import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaterialCard from "../component/Card/MaterialCard.tsx";

const Screening = () => {
  const [data, setData] = useState([]);
  const [resData, setResData] = useState({
    application_form_id: "",
    isPartialApplication: "",
  });
  const [toggle, setToggle] = useState(false);
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

  const handleClick = (item, itemType) => {
    const progId = item.map((pre) => pre.programId).toString();
    try {
      setResData({
        application_form_id: "6103503394993864704",
        isPartialApplication: false,
      });
      setToggle(true);

      // const payload = {
      //   application_type_id: progId,
      //   programs: itemType,
      // };
      // const res = axios.post("",
      //   payload,
      //   {
      //     method: "POST",
      //     headers: {
      //       // Authorization:`Bearer : ${token}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = () => {
    navigate("/info");
  };

  return (
    <div>
      {!toggle ? (
        <>
          <div className="w-3/4 mx-auto my-3">
            {data.map((item) =>
              item.intakeApplicationTypes.map((item) => (
                <div className="my-[2rem]">
                  <MaterialCard
                    title={item.name}
                    bodyText={item.description}
                    subtitle={item.summary}
                    buttonText={"Apply"}
                    onClick={() =>
                      handleClick(item.programs, item.application_type_id)
                    }
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
                    onClick={() =>
                      handleClick(item.programs, item.application_type_id)
                    }
                  />
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-between w-3/5 mx-auto my-5">
          <div className="flex gap-6">
            <label>{resData.application_form_id}</label>
            <h1>{resData.isPartialApplication === true ? "true" : "false"}</h1>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-green-500 px-4 text-white py-0.5 rounded-md"
              onClick={handleSubmit}
            >
              Apply
            </button>
            <button
              className="bg-red-500 px-4 text-white py-0.5 rounded-md"
              onClick={() => setToggle(false)}
            >
              Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screening;
