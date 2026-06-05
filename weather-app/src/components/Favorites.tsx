import type { City } from "../App";

interface FavoritesProps {
  favoriteCities: string[];
  onRemove: (cityName: string) => void;
  cities: City[];
  onSelectCity: (city: City) => void;
}

export default function Favorites({
  favoriteCities,
  onRemove,
  cities,
  onSelectCity,
}: FavoritesProps) {
  return (
    <div className="glass-card p-6 rounded-2xl shadow-xl">
      <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
        <span className="text-2xl">❤️</span> ჩემი ფავორიტები
      </h2>

      {favoriteCities.length === 0 ? (
        <div className="text-white/50 text-center py-8">
          <span className="text-4xl block mb-3">🏙️</span>
          <p className="font-medium">ფავორიტები ცარიელია</p>
          <p className="text-sm mt-1">
            დაამატე ქალაქი ⭐ ღილაკზე დაჭერით
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {favoriteCities.map((cityName) => {
            const cityObj = cities.find((c) => c.name === cityName);
            return (
              <div
                key={cityName}
                className="flex items-center justify-between bg-white/10 rounded-xl p-3 transition-all duration-300 hover:bg-white/20 animate-fade-in"
              >
                <button
                  onClick={() => cityObj && onSelectCity(cityObj)}
                  className="text-white font-semibold text-left flex-1 cursor-pointer hover:underline"
                >
                  ⭐ {cityName}
                </button>
                <button
                  id={`remove-fav-${cityName}`}
                  onClick={() => onRemove(cityName)}
                  className="text-red-300 hover:text-red-100 hover:bg-red-500/30 rounded-lg p-2 transition-all duration-200 cursor-pointer text-sm font-bold"
                  title="წაშლა"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}

      {favoriteCities.length > 0 && (
        <p className="text-white/40 text-xs mt-4 text-center font-medium">
          შენახულია LocalStorage-ში ({favoriteCities.length} ქალაქი)
        </p>
      )}
    </div>
  );
}
