import { Anime as AnimeType } from "@/types/anime";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Star } from "lucide-react";

interface AnimeDetailsProps {
  anime: AnimeType;
}

function Anime({ anime }: AnimeDetailsProps) {
  return (
    <>
      <div className="flex gap-10 items-center mb-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${anime.attributes.image.data.attributes.url}`}
          width={400}
          height={300}
          sizes="100vw"
          alt={anime.attributes.alt}
        />
        <div>
          <p className="font-bold text-3xl">{anime.attributes.title}</p>
          <p className="text-slate-500 text-xl">{anime.attributes.alt}</p>
          <p className="mt-4 flex gap-4">
            <Star className="text-2xl text-star-yellow" />
            <span className="font-semibold text-xl">{4.5}</span>
          </p>
          <div className="gap-4 flex mt-8">
            <Button color="primary">Watch</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
            {/* DETAILS */}
            <div className="max-w-[394px] w-full">
              <p className="text-lg font-semibold mb-4">Details</p>
              <div className="grid grid-cols-2 mb-4 gap-5 text-sm">
                <p>Episodes</p>
                <p>{anime.attributes.episodes}</p>
              </div>
              <div className="grid grid-cols-2 mb-4 gap-5 text-sm">
                <p>Genre</p>
                <p className="w-[50%]">{anime.attributes.genre.split('_').join(' ')}</p>
              </div>
              <div className="grid grid-cols-2 mb-4 gap-5 text-sm">
                <p>Season</p>
                <p>{anime.attributes.season}</p>
              </div>
            </div>
            {/* SYNOPSIS */}
            <div>
              <p className="text-lg font-semibold mb-4">Synopsis</p>
              <p>{anime.attributes.synopsis}</p>
            </div>
          </div>
    </>
  );
}

export default Anime;
