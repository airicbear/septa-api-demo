import { useState } from "react";
import { REGIONAL_RAIL_STATIONS } from "../constants/regional-rail-station-constants";
import { handleURLParamChange } from "../utils/input-component-utils";

interface ArrivalsInputComponentProps {
  handleChange: (params: URLSearchParams) => void;
}

function ArrivalsInputComponent({ handleChange }: ArrivalsInputComponentProps) {
  const [urlParams, setURLParams] = useState<URLSearchParams>(new URLSearchParams());

  useState(() => {
    const defaultURLParams = new URLSearchParams({
      station: '9th St',
      results: '',
      direction: '',
    });
    setURLParams(defaultURLParams);
    handleChange(defaultURLParams);
  });

  function _handleURLParamChange(
    event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>,
    param: string,
  ) {
    return handleURLParamChange(event, urlParams, param, setURLParams, handleChange);
  }

  function handleStationSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    _handleURLParamChange(event, "station");
  }

  function handleResultsChange(event: React.ChangeEvent<HTMLInputElement>) {
    _handleURLParamChange(event, "results");
  }

  function handleDirectionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    _handleURLParamChange(event, "direction");
  }

  return (
    <div className="grid grid-cols-3">
      <div className="">
        <label className="mr-2 font-bold text-gray-300">station</label>
      </div>
      <div className="col-span-2">
        <select className="rounded-md w-full" onChange={handleStationSelect}>
          {REGIONAL_RAIL_STATIONS.map((station) => (<option key={station} value={station}>{station}</option>))}
        </select>
      </div>
      <div>
        <label className="font-bold text-gray-300">results</label>
      </div>
      <div className="col-span-2">
        <input type="number" min={1} className="rounded-md w-full" onChange={handleResultsChange} />
      </div>
      <div>
        <label className="font-bold text-gray-300">direction</label>
      </div>
      <div className="col-span-2">
        <select className="rounded-md w-full" onChange={handleDirectionSelect}>
          <option value="">--</option>
          <option>N</option>
          <option>S</option>
        </select>
      </div>
    </div>
  );
}

export default ArrivalsInputComponent;