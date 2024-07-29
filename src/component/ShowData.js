import { Button } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function ShowData() {
  return (
    <>
      <div className="p-4 ">
        <label for="fname" className="text-lg" >The Application ID is </label>
        <span className="ml-1 font-semibold">: 8394738957489357</span>        {/* response of data?.application_form_id */}

        <br />
        <label for="fname" className="text-lg">Is this a Partial Application? </label>
        <span className="font-semibold ml-1 ">False</span>{" "}
        {/* response of data?.isPartialApplication */}
      </div>
      <button className="bg-[#40828a] ml-16 text-white my-2 rounded-md hover:bg-sky-600 font-semibold  px-4 py-2 text">
        Next <ChevronRightIcon />{" "}
      </button>
    </>
  );
}

export default ShowData;
