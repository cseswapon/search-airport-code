# use-airport-hook

A simple React hook to fetch and display airport information based on user input. This package helps you search for airports using airport codes or country names efficiently.

## Installation

To install the package, run the following command:

```sh
npm i use-airport-hook
```

or using yarn:

```sh
yarn add use-airport-hook
```

## Usage

```jsx
import { useState } from "react";
import useAirport from "use-airport-hook";

export default function App() {
  const [search, setSearch] = useState("");
  const { isLoading, error, data } = useAirport(search);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>✈️ Airport Search</h2>
      <input
        type="text"
        placeholder="Enter airport code or country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "10px",
        }}
      />
      {isLoading && <p>Loading airports...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {data &&
          data.map((airport, index) => (
            <li key={index}>
              <strong>{airport.airport_code}</strong> - {airport.country_name} ({airport.country_loc})
            </li>
          ))}
      </ul>
    </div>
  );
}
```

## Features
- 🔍 Search for airports using airport codes or country names.
- 📡 Fetches real-time airport data.
- 🛠️ Easy to integrate with any React application.
