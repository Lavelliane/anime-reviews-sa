import { CreateReview } from "@/types/anime"
import { StarIcon } from "lucide-react"

function Review({ title, rating, body, author }: CreateReview) {
  return (
    <div className='mb-8'>
        <p className="font-bold">{author}</p>
        <p className="text-light-gray">{title}</p>
        <p>{body}</p>
        <div>
        <div className="flex gap-2">
            <StarIcon className="text-md text-star-yellow" />{' '}
            <span className="font-semibold text-md">{rating}</span>
        </div>
        </div>
    </div>
  )
}
export default Review