'use client';

import { useState } from "react";
import { SEPTA_API_ALL_DATA, SEPTA_API_BASE_URL } from "./constants/api-constants";
import { useRouter } from "next/navigation";

export default function Page() {
  const [endpoint, setEndpoint] = useState<string>('');
  const router = useRouter();

  function handleEndpointSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setEndpoint(event.target.value);
  }

  function handleCallEndpoint() {
    console.log(endpoint);
    router.push(`${SEPTA_API_BASE_URL}${endpoint}`);
  }

  return (
    <main>
      <select id="endpoint" onChange={handleEndpointSelect}>
        <option selected disabled>Choose an endpoint</option>
        {SEPTA_API_ALL_DATA.map((endpoint) => (<option key={endpoint} value={endpoint}>{endpoint}</option>))}
      </select>
      <br/>
      <button onClick={handleCallEndpoint} className="p-2 bg-blue-300">Call endpoint</button>
    </main>
  );
}
