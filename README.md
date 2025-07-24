Sure bro! Here's a complete, polished, and professional `README.md` file for your `use-airport-hook` package:

---

### ✅ `README.md`

````markdown
# ✈️ use-airport-hook

A simple and powerful React hook for searching airport details by **airport code** or **country name**.  
Lightweight, debounced, and compatible with both **JavaScript** and **TypeScript** React projects.

---

## 📦 Installation

Using npm:

```bash
npm install use-airport-hook
````

Using yarn:

```bash
yarn add use-airport-hook
```

---

## 🔧 Usage

```tsx
import React, { useState } from 'react';
import { useAirport } from 'use-airport-hook';

export default function AirportSearchComponent() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useAirport(query);

  return (
    <div>
      <input
        placeholder="Search by code or country"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && data.length > 0 ? (
        <ul>
          {data.map((airport) => (
            <li key={airport._id}>
              <strong>{airport.airport_code}</strong> — {airport.airport_name} ({airport.location})
            </li>
          ))}
        </ul>
      ) : (
        query.length >= 3 && <p>No airport found.</p>
      )}
    </div>
  );
}
```

---

## ✨ Features

* 🔍 **Search** by 3-letter airport codes (e.g. `DAC`, `LAX`, `AAA`)
* 🌍 **Search** by country name or location (e.g. `Bangladesh`, `Australia`)
* ⚙️ Fully supports **React 17+**, **React 18**, and **React 19**
* 🔄 Debounced input to avoid unnecessary lookups
* 🛠️ Works in **JavaScript** and **TypeScript** projects

---

## 🧩 API

```ts
useAirport(name: string): {
  isLoading: boolean;
  error: string | null;
  data: Airport[] | null;
}
```

### `Airport` object format

```ts
interface Airport {
  _id: string;
  country_name: string;
  country_code: string;
  airport_code: string;
  airport_name: string;
  country_loc: string;
  iata: string;
  format: string;
  location: string;
}
```

---

## 📘 Example Queries

| Input       | Result                            |
| ----------- | --------------------------------- |
| `DAC`       | Shahjalal International Airport   |
| `Australia` | All airports located in Australia |
| `aaa`       | Anaa Airport (French Polynesia)   |

---

## 🛠 Development

```bash
# Clone the repo
git clone https://github.com/cseswapon/search-airport-code.git

# Install dependencies
npm install

# Build the package
npm run build
```

---

## 📦 Publish to npm

```bash
npm version patch      # or minor/major as needed
npm publish --access public
```

---

## 👨‍💻 Author

**Swapon Saha**

* 🔗 GitHub: [@cseswapon](https://github.com/cseswapon)
* 📦 npm: [use-airport-hook](https://www.npmjs.com/package/use-airport-hook)

---

## ⚖️ License

This package is licensed under the **ISC License**.
Feel free to use, share, and contribute!

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.
Let's build something useful together! 💪

```

---

Let me know if you want:

- Markdown badges (like npm version, license, downloads)
- A live demo link (via CodeSandbox or StackBlitz)
- Vite + React example integration folder

I'll help you scale this to a perfect open-source level! 🚀
```
