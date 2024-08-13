import { Anime as AnimeType } from "@/types/anime";
import React from "react";
import Anime from "./_components/Anime";

async function AnimeDetailsPage({ params }: { params: { id: number } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/animes/${params.id}?populate=*`
  );
  const anime = await res.json();

  const animeDetails: AnimeType = anime.data;

  return (
    <div>
      <Anime anime={animeDetails} />
    </div>
  );
}

export default AnimeDetailsPage;
