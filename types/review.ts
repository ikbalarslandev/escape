export interface IReviewUser {
  name: string;
  img: string;
}

export interface IReviewDetails {
  url: string;
  rating: number;
  title: string;
  desc: string;
  type: string;
}

export interface IReview {
  date: string;
  user: IReviewUser;
  details: IReviewDetails;
}

export interface IReviewsData {
  data: {
    totalReviews: number;
    averageRating: number;
    allReviews: IReview[];
  };
}
