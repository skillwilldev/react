import { useState, useEffect } from "react";
import type { City } from "../App";

interface CurrentWeather {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

interface WeatherDisplayProps {
  city: City;
  onAddToFav: () => void;
  isFavorite: boolean;
  onTemperatureChange: (temp: number | null) => void;
}

// ამინდის კოდების აღწერა ქართულად
function getWeatherEmoji(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 82) return "🌦️";
  if (code <= 86) return "❄️";
  if (code <= 99) return "⛈️";
  return "🌡️";
}

function getWeatherDescription(code: number): string {
  if (code === 0) return "მოწმენდილი ცა";
  if (code <= 3) return "ნაწილობრივ მოღრუბლული";
  if (code <= 48) return "ნისლი";
  if (code <= 55) return "წვრილი წვიმა";
  if (code <= 67) return "წვიმა";
  if (code <= 77) return "თოვლი";
  if (code <= 82) return "თავსხმა წვიმა";
  if (code <= 86) return "ძლიერი თოვა";
  if (code <= 99) return "ჭექა-ქუხილი";
  return "უცნობი";
}

export default function WeatherDisplay({
  city,
  onAddToFav,
  isFavorite,
  onTemperatureChange,
}: WeatherDisplayProps) {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // 2. ეფექტი: იშვება ყოველ ჯერზე, როცა მომხმარებელი სხვა ქალაქს აირჩევს
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const cw: CurrentWeather = data.current_weather;
        setWeather(cw);
        onTemperatureChange(cw.temperature);
        setLoading(false);
      })
      .catch((err) => {
        console.error("შეცდომა მონაცემების წამოღებისას", err);
        setError(true);
        setLoading(false);
        onTemperatureChange(null);
      });
  }, [city, onTemperatureChange]); // <-- ხელახლა იშვება ქალაქის შეცვლისას

  return (
    <div className="glass-card p-6 rounded-2xl shadow-xl flex flex-col justify-between">
      <div>
        {/* City name header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">{city.name}</h2>
          {weather && (
            <span className="text-4xl animate-float">
              {getWeatherEmoji(weather.weathercode)}
            </span>
          )}
        </div>

        {/* Weather data */}
        {loading ? (
          <div className="space-y-3">
            <div className="h-12 w-32 rounded-lg animate-shimmer" />
            <div className="h-6 w-48 rounded-lg animate-shimmer" />
            <div className="h-5 w-40 rounded-lg animate-shimmer" />
          </div>
        ) : error ? (
          <p className="text-red-200 bg-red-500/20 p-3 rounded-lg font-medium">
            ❌ მონაცემები ვერ მოიძებნა
          </p>
        ) : weather ? (
          <div className="space-y-3 animate-fade-in">
            <p className="text-6xl font-black text-white drop-shadow-md">
              {weather.temperature}
              <span className="text-3xl font-bold">°C</span>
            </p>
            <p className="text-white/80 text-base font-medium">
              {getWeatherDescription(weather.weathercode)}
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-lg">💨</span>
              <p className="font-semibold">
                ქარის სიჩქარე: {weather.windspeed} კმ/სთ
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Add to favorites button */}
      <button
        id="add-to-favorites-btn"
        onClick={onAddToFav}
        disabled={isFavorite}
        className={`mt-6 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${isFavorite
          ? "bg-white/20 text-white/50 cursor-not-allowed"
          : "bg-white text-slate-800 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          }`}
      >
        {isFavorite ? "✅ ფავორიტებშია" : "⭐ ფავორიტებში დამატება"}
      </button>
    </div>
  );
}
