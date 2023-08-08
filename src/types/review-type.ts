export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type TReview = {
  id: string;
  date: string;
  user: Omit<TUser, 'email' | 'token'>;
  comment: string;
  rating: number;
}

export type TReviews = TReview[];
