export class Comment {
  id: number;
  author: string;
  text: string;
  date: Date;
  comments?: Comment[];
  attachments?: string[];
}
