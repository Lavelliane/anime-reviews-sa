'use client'
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { createReviewAction } from "../_actions/actions";
import { useForm } from "react-hook-form";
import { ReviewSchema } from "@/schemas/ReviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function ReviewForm({ id }: { id: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ReviewSchema),
  });

  const onSubmit = async (data: any) => {
    await createReviewAction({ ...data, anime: id})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
      <label htmlFor="title">Title</label>
      <Input {...register('title')} />

      <label htmlFor="author">Author</label>
      <Input {...register('author')} />

      <label htmlFor="rating">Rating</label>
      <Input type="number" {...register('rating')} />

      <label htmlFor="body">Body</label>
      <Input {...register('body')} />

      <Button type="submit" className="my-4 bg-royal-purple text-white">Add Review</Button>
    </form>
  );
}

export default ReviewForm;
