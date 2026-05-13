export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://media.vanityfair.com/photos/6759e8618206dfbaa0e61605/master/w_1920,c_limit/Interstellar-rewatch.jpg"
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Heath_Ledger_as_the_Joker_in_The_Dark_Knight.png"
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  {
    id: 4,
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://qz.com/cdn-cgi/image/width=1920,quality=85,format=auto/https://assets.qz.com/media/3b7151d019ff2f5748471b507f96abf6.jpg"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    image: "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg"
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    image: "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg"
  }
];

export default movies;