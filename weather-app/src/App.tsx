import { useState } from "react";
import CitySelector from "./components/CitySelector";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";

// ქალაქების ტიპი
export interface City {
  name: string;
  lat: number;
  lon: number;
}

// მზა მონაცემები სტუდენტებისთვის
const CITIES: City[] = [
  { name: "თბილისი", lat: 41.69, lon: 44.8 },
  { name: "ლონდონი", lat: 51.5, lon: -0.12 },
  { name: "ნიუ-იორკი", lat: 40.71, lon: -74.0 },
  { name: "ტოკიო", lat: 35.67, lon: 139.65 },
];

export default function App() {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  
  // Явно указываем, что это массив строк string[], чтобы не было конфликтов
  const [favoriteCities, setFavoriteCities] = useState<string[]>(() => {
    const saved = localStorage.getItem("fav_cities");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentTemp, setCurrentTemp] = useState<number | null>(null);

  // ფავორიტებში დამატების ფუნქცია
  const addToFavorites = () => {
    if (!favoriteCities.includes(selectedCity.name)) {
      const updated = [...favoriteCities, selectedCity.name];
      setFavoriteCities(updated);
      localStorage.setItem("fav_cities", JSON.stringify(updated));
    }
  };

  // ფავორიტებიდან წაშლის ფუნქცია (ИСПРАВЛЕНО: убрали .name, так как c — это уже строка)
  const removeFromFavorites = (cityName: string) => {
    const updated = favoriteCities.filter((c) => c !== cityName);
    setFavoriteCities(updated);
    localStorage.setItem("fav_cities", JSON.stringify(updated));
  };

  // ფონის ფერის განსაზღვრა ტემპერატურის მიხედვით
  const getBgClass = (): string => {
    if (currentTemp === null) return "bg-cold";
    return currentTemp >= 20 ? "bg-warm" : "bg-cold";
  };

  return (
    <div
      className={`min-h-screen ${getBgClass()} transition-all duration-700 ease-in-out p-4 md:p-8 flex flex-col items-center font-sans`}
    >
      {/* Header */}
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg tracking-tight">
          🌤️ მოგზაურის ამინდის ასისტენტი
        </h1>
        <p className="text-white/80 mt-2 text-lg font-medium">
          აირჩიე ქალაქი და გაიგე ამინდი რეალურ დროში
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl animate-fade-in">
        <CitySelector
          cities={CITIES}
          onSelect={setSelectedCity}
          activeCity={selectedCity}
        />
        <WeatherDisplay
          city={selectedCity}
          onAddToFav={addToFavorites}
          isFavorite={favoriteCities.includes(selectedCity.name)}
          onTemperatureChange={setCurrentTemp}
        />
        <Favorites
          favoriteCities={favoriteCities}
          onRemove={removeFromFavorites}
          cities={CITIES}
          onSelectCity={setSelectedCity}
        />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-white/50 text-sm font-medium">
        Quick Weather & Trip Planner © {new Date().getFullYear()}
      </footer>
    </div>
  );
}