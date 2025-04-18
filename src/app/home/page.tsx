"use client";
import { MarkersProps, MatcherTypes } from "@/types/google-maps/types";
import MapContainer from "../components/home/MapContainer";
import React, { useState } from "react";
import SearchAndFilter from "../components/home/SearchAndFilter";
import SearchBar from "../components/home/SearchBar";

const locations: MarkersProps[] = [
  {
    specializations: "Robotica",
    detail: "",
    title: "Hospital Italiano San Justo",
    key: "hospital-italiano-san-justo",
    location: { lat: -34.66838790905556, lng: -58.56703065328709 },
    matching_types: [
      MatcherTypes.FEATURED,
      MatcherTypes.RECOMMENDED,
      MatcherTypes.DEFAULT,
    ],
  },
  {
    specializations: "Carpinteria",
    detail: "",
    title: "Megafutbol San Justo",
    key: "megafutbol-san-justo",
    location: { lat: -34.6708409494721, lng: -58.556516394121694 },
    matching_types: [
      MatcherTypes.FEATURED,
      MatcherTypes.RECOMMENDED,
      MatcherTypes.DEFAULT,
    ],
  },
  {
    specializations: "CNC",
    detail: "",
    title: "Club Huracán San Justo Sede Universidad",
    key: "club-huracan-san-justo-sede-universidad",
    location: { lat: -34.66805967578555, lng: -58.558673859403704 },
    matching_types: [MatcherTypes.FEATURED, MatcherTypes.DEFAULT],
  },
  {
    specializations: "Electricidad",
    detail: "",
    title: "Open Park Sede Cementerio",
    key: "open-park-sede-cementerio",
    location: { lat: -34.67217233718847, lng: -58.553199389761254 },
    matching_types: [MatcherTypes.RECOMMENDED, MatcherTypes.DEFAULT],
  },
  {
    specializations: "Mecanica",
    detail: "",
    title: "Plaza Rateros San Justo",
    key: "plaza-rateros-san-justo",
    location: { lat: -34.67458972514733, lng: -58.55190688733059 },
    matching_types: [MatcherTypes.RECOMMENDED, MatcherTypes.DEFAULT],
  },
  {
    specializations: "Automovil",
    detail: "",
    title: "Plaza San Justo",
    key: "plaza-san-justo",
    location: { lat: -34.67734991874826, lng: -58.56092313420325 },
    matching_types: [MatcherTypes.DEFAULT],
  },
];

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState<MarkersProps | null>(
    null
  );
  const [filteredLocations, setFilteredLocations] =
    useState<MarkersProps[]>(locations);
  const [selectedMatcher, setSelectedMatcher] = useState<MatcherTypes>(
    MatcherTypes.DEFAULT
  );

  const handleLocationSelect = (location: MarkersProps) => {
    setSelectedLocation((prev) =>
      prev?.key === location.key ? null : location
    );
  };

  const handleFilterByMatching = (matching: MatcherTypes) => {
    // Always fall back to DEFAULT when clicking the active filter
    const newFilter =
      selectedMatcher === matching ? MatcherTypes.DEFAULT : matching;
    setSelectedMatcher(newFilter);

    // Always include DEFAULT locations when filtering
    const filtered = locations.filter(
      (location) =>
        newFilter === MatcherTypes.DEFAULT ||
        location.matching_types?.includes(newFilter)
    );

    setFilteredLocations(filtered.length > 0 ? filtered : locations);
  };

  return (
    <>
      <main className="min-h-screen w-full bg-red-300">
        <section className="p-4 md:bg-[F6EFE5] ">
          <article className="flex flex-col flex-wrap">
            <h1 className="text-center text-2xl font-bold mb-4">
              Welcome to Home Section
            </h1>

            {/* <SearchAndFilter
              handleFilterByMatching={handleFilterByMatching}
              selectedMatcher={selectedMatcher}
            /> */}

            <SearchBar />

            <MapContainer
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
          </article>
        </section>
      </main>
    </>
  );
}
