'use client';

import { useState } from "react";
import { SEPTA_API_ALL_DATA, SEPTA_API_BASE_URL } from "./constants/api-constants";
import Link from "next/link";
import ArrivalsInputComponent from "./components/arrivals-input-component";
import { getURL } from "./utils/api-utils";

export default function Page() {
  const [url, setURL] = useState(SEPTA_API_BASE_URL);
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>(SEPTA_API_ALL_DATA.at(0) ?? '');
  const [urlParams, setURLParams] = useState<URLSearchParams>(new URLSearchParams());

  useState(() => {
    setSelectedEndpoint(selectedEndpoint);
    setURL(getURL(selectedEndpoint, urlParams));
  });

  function handleEndpointSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const newEndpoint = event.target.value;
    const newURLParams = new URLSearchParams();
    setSelectedEndpoint(newEndpoint);

    setURLParams(newURLParams);
    setURL(getURL(newEndpoint, newURLParams));
  }

  function handleParamsChange(params: URLSearchParams) {
    setURLParams(params);
    setURL(getURL(selectedEndpoint, params));
  }

  return (
    <main className="bg-gray-500 max-w-xl my-6 mx-auto p-6 rounded-md">
      <div className="mb-2">
        <p className="font-bold mr-2 text-gray-300">URL</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-md">
        <Link href={url}>
          {url}
        </Link>
      </div>
      <div className="mb-2">
        <p className="font-bold mr-2 text-gray-300">Endpoint</p>
      </div>
      <div>
        <select id="endpoint" value={selectedEndpoint} onChange={handleEndpointSelect}
          className="mb-4 text-gray-700 block w-full px-4 py-2 bg-gray-400 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-400"
        >
          {SEPTA_API_ALL_DATA.map((endpoint) => (<option key={endpoint} value={endpoint}>{endpoint}</option>))}
        </select>
      </div>
      {
        (selectedEndpoint == SEPTA_API_ALL_DATA.at(0)) ?
          <ArrivalsInputComponent handleChange={handleParamsChange} /> : <></>
      }
    </main>
  );
}