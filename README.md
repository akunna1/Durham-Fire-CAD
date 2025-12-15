# Durham Fire CAD 🚒

**Durham Fire CAD** is a JavaScript-based simulation of a real **computer-aided dispatch (CAD)** system for the City of Durham. The application processes pre-existing emergency incident data and models how Fire incidents are handled operationally. The system **responds only to Fire incidents**, intentionally ignoring Police and EMS calls, and visualizes incident processing and station assignment behavior.

## Features

* Filters Fire incidents from a CSV dataset.
* Converts X/Y coordinates (State Plane) to longitude/latitude for mapping.
* Determines the closest fire stations to each incident and groups them by battalion (Durham has 4 battalions).
* Interactive “game-like” interface where clicking a button triggers incident processing and shows station responses.
* Ready for integration with **GeoJSON** and geospatial analysis using **Turf.js**.

## Tech Stack

* **Next.js** + **TypeScript** for frontend and backend
* **TailwindCSS** for styling
* **Leaflet.js** for map display
* **Turf.js** for geospatial calculations
* CSV and GeoJSON files for incident and station data

## Folder Structure 📁

```
Durham-Fire-CAD/
├── notes             # Notes about project progress, definitions, and data, etc
├── public/ geojson   # GeoJSON files for Fire Incidents, Emergency Incidents, and Fire Stations
├── src/              # Next.js app
├── data/             # CSVs for emergency incidents and Durhmanfire stations
├── scripts/          # Utility scripts (e.g., coordinate conversion, transformation & extraction)
├── package.json
└── README.md
```

## Notes

* Only Fire incidents are processed; Police and EMS are ignored.
* X/Y columns in the CSV are dropped after conversion to latitude/longitude.
* Focused entirely on Durham, keeping the app lightweight and simple.
