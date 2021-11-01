export type Restaurant = {
  id: string;
  name: string;
  description: string;
  published_at: string;
  image: Image;
  categories: Category[];
  comments: Comment[];
};

export type Comment = {
  id: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Image = {
  name: string;
  url: string;
};
