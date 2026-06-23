import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Check, Star } from "lucide-react";
import { styles } from "./styles";


export default function App() {
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleBuy = () => {
    if (inCart) return;
    setInCart(true);
    setTimeout(() => setInCart(false), 2000);
  };

  return (
    <div style={styles.page}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        <div style={styles.imgWrap}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              style={styles.img}
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" rx="16" fill="#e8eeff" />
              <rect x="30" y="28" width="60" height="52" rx="6" fill="#b5d4f4" />
              <rect x="38" y="36" width="44" height="28" rx="3" fill="#e6f1fb" />
              <rect x="42" y="42" width="36" height="4" rx="2" fill="#378add" />
              <rect x="42" y="50" width="24" height="4" rx="2" fill="#85b7eb" />
              <rect x="42" y="58" width="16" height="4" rx="2" fill="#85b7eb" />
              <rect x="45" y="84" width="30" height="8" rx="4" fill="#378add" />
              <rect x="52" y="86" width="16" height="4" rx="2" fill="#e6f1fb" />
            </svg>
          </motion.div>
        </div>
        <div style={styles.body}>
          <span style={styles.badge}>ახალი</span>
          <h2 style={styles.name}>Wireless Pro X</h2>

          <div style={styles.stars}>
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill="#EF9F27"
                stroke="#EF9F27"
              />
            ))}
            <Star size={14} fill="none" stroke="#EF9F27" />
            <span style={styles.starCount}>(128)</span>
          </div>

          <p style={styles.desc}>
            მაღალი ხარისხის უკაბელო მოწყობილობა. 40 საათიანი ბატარეა, ხმის
            გაუქმება.
          </p>

          <div style={styles.priceRow}>
            <span style={styles.price}>₾299</span>
            <span style={styles.priceOld}>₾399</span>
          </div>

          <div style={styles.actions}>
            <motion.button
              style={{
                ...styles.btnBuy,
                ...(inCart ? styles.btnBuyAdded : {}),
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBuy}
            >
              {inCart ? (
                <>
                  <Check size={16} />
                  დამატებულია
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  კალათაში
                </>
              )}
            </motion.button>
            <motion.button
              style={{
                ...styles.btnLike,
                borderColor: liked ? "#E24B4A" : "#e5e7eb",
              }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked(!liked)}
              aria-label={liked ? "მოწონება გაუქმება" : "მოწონება"}
            >
              <Heart
                size={20}
                fill={liked ? "#E24B4A" : "none"}
                stroke={liked ? "#E24B4A" : "#888"}
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}