import Link from "next/link";
import Image from "next/image";

export type MovieType = {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};
export default function Movie({
  id,
  title,
  poster_path,
  release_date,
}: MovieType) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={`poster image of ${title}`}
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
}
