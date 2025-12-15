// Script 4
// Run with npx ts-node scripts/extractFireIncidents.ts in VS code terminal

import fs from "fs";

const INPUT = "./public/geojson/Emergency_Incidents.geojson";
const OUTPUT = "./public/geojson/Fire_Incidents.geojson";

// Read and parse input GeoJSON
const rawData = fs.readFileSync(INPUT, "utf-8");
const geojson = JSON.parse(rawData);

// Keep only incidents where Fire is included
const fireFeatures = geojson.features.filter((feature: any) => {
  const whoToSend = feature.properties?.WhoToSend;
  return typeof whoToSend === "string" && whoToSend.includes("Fire");
});

// Create new FeatureCollection
const fireGeoJSON = {
  type: "FeatureCollection",
  features: fireFeatures,
};

// Write output GeoJSON
fs.writeFileSync(OUTPUT, JSON.stringify(fireGeoJSON, null, 2));

console.log(`🔥 Extracted ${fireFeatures.length} fire incidents`);
console.log(`✅ Created ${OUTPUT}`);
