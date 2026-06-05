import type { City } from "../App";

interface CitySelectorProps {
  cities: City[];
  onSelect: (city: City) => void;
  activeCity: City;
}

export default function CitySelector({
  cities,
  onSelect,
  activeCity,
}: CitySelectorProps) {
  return (
    <div className="glass-card p-6 rounded-2xl shadow-xl">
      <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
        <span className="text-2xl">📍</span> აირჩიე ქალაქი
      </h2>
      <div className="flex flex-col gap-3">
        {cities.map((city) => {
          const isActive = activeCity.name === city.name;
          return (
            <button
              key={city.name}
              id={`city-btn-${city.name}`}
              onClick={() => onSelect(city)}
              className={`p-4 text-left rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white text-slate-800 shadow-lg scale-[1.03]"
                  : "bg-white/10 text-white/90 hover:bg-white/20 hover:scale-[1.02]"
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{city.name}</span>
                {isActive && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-bold">
                    აქტიური
                  </span>
                )}
              </span>
              <span className="text-xs mt-1 block opacity-60">
                {city.lat}° / {city.lon}°
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
