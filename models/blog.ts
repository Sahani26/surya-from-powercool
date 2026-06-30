import { ObjectId } from "mongodb";

export interface Blog {
  _id?: ObjectId;
  title: string;
  slug: string;
  content: string;       // full blog HTML
  author?: string;
  image?: string;        // main blog image
  createdAt: string;     // date string (ISO)
  tags?: string[];       // for tag list (optional)

   // NEW FIELDS
  quote?: string;        // blog-details__author-text
  subTitle?: string;     // blog-details__title-2
  subContent?: string;   // blog-details__text-3
}
