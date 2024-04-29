import { useState } from "react";
import { REGIONAL_RAIL_STATIONS } from "../constants/regional-rail-station-constants";
import { handleURLParamChange } from "../utils/input-component-utils";

interface NextToArriveInputComponentProps {
  handleChange: (params: URLSearchParams) => void;
}

function NextToArriveInputComponent({ handleChange }: NextToArriveInputComponentProps) {
  const [urlParams, setURLParams] = useState<URLSearchParams>(new URLSearchParams());

  useState(() => {
    const defaultURLParams = new URLSearchParams({
      req1: '9th St',
      req2: '9th St',
      req3: '',
    });
    setURLParams(defaultURLParams);
    handleChange(defaultURLParams);
  });

  function _handleURLParamChange(
    event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>,
    param: string
  ) {
    return handleURLParamChange(event, urlParams, param, setURLParams, handleChange);
  }

  function handleStationOneSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    _handleURLParamChange(event, "req1");
  }

  function handleStationTwoSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    _handleURLParamChange(event, "req2");
  }

  function handleResultsChange(event: React.ChangeEvent<HTMLInputElement>) {
    _handleURLParamChange(event, "req3");
  }

  return (
    <div className="grid grid-cols-3">
      <div className="">
        <label className="mr-2 font-bold text-gray-300">station 1</label>
      </div>
      <div className="col-span-2">
        <select className="rounded-md w-full" onChange={handleStationOneSelect}>
          {REGIONAL_RAIL_STATIONS.map((station) => (<option key={station} value={station}>{station}</option>))}
        </select>
      </div>
      <div className="">
        <label className="mr-2 font-bold text-gray-300">station 2</label>
      </div>
      <div className="col-span-2">
        <select className="rounded-md w-full" onChange={handleStationTwoSelect}>
          {REGIONAL_RAIL_STATIONS.map((station) => (<option key={station} value={station}>{station}</option>))}
        </select>
      </div>
      <div>
        <label className="font-bold text-gray-300">results</label>
      </div>
      <div className="col-span-2">
        <input type="number" min={1} className="rounded-md w-full" onChange={handleResultsChange} />
      </div>
    </div>
  );
}

export default NextToArriveInputComponent;