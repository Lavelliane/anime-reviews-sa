import { Anime as AnimeType } from "@/types/anime";
import React from "react";
import Anime from "./_components/Anime";
import { Button } from "@nextui-org/react";
import Review from "./_components/Review";
import ReviewForm from "./_components/ReviewForm";

async function AnimeDetailsPage({ params }: { params: { id: number } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/animes/${params.id}?[populate]=*`, {
      cache: 'no-cache',
      next: {
        tags: ["anime"]
      }
    }
  );
  const anime = await res.json();

  const animeDetails: AnimeType = anime.data;
  const reviewDetails = animeDetails.attributes?.reviews?.data.map((review) => {
    return {
      title: review.attributes.title,
      author: review.attributes.author,
      body: review.attributes.body,
      rating: review.attributes.rating,
    };
  });

  return (
    <div>
      <Anime anime={animeDetails} />
      <p className="text-xl font-bold mt-8 border-l-royal-purple border-l-8 pl-2 mt-8">Add your Review</p>
      <p className="mt-2 text-sm mb-8">Rate your favorite anime and let others know!</p>
      <ReviewForm id={animeDetails.id} />
      {animeDetails.attributes.reviews &&
        reviewDetails &&
        reviewDetails.map((review) => <Review {...review} />)}
    </div>
  );
}

export default AnimeDetailsPage;
