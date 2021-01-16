import { Rating } from '@material-ui/lab';
export default function ratingItem ({rate}) {
  return(
      <div>
          <Rating name="half-rating" defaultValue={rate/2} precision={0.25} readOnly />
      </div>
  )
}
