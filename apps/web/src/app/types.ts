export type News = {
  id: number;
  author: string;
  title: string;
  description: string;
  date: string;
  attachments: string[];
  comments?: Comment[];
};
