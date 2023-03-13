import Image from "next/image";
import { MovieType } from "../movie";
type ParamsType = {
  params: {
    movie: string;
  };
};

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie: MovieType) => {
    const id = movie.id;
    return {
      movie: id.toString(),
    };
  });
}
export default async function MovieDetail({ params }: ParamsType) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  return (
    <div>
      <h2 className="text-4xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>{res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12"
        src={imagePath + res.backdrop_path}
        alt={res.id}
        width={1000}
        height={1000}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
