"use client"
import MapContainer from "../components/home/MapContainer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-4">Welcome to the Map</h1>
      <MapContainer />
    </div>
  )
}
