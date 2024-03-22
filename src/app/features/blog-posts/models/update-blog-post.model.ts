export interface UpdateBlogPost{
  title:string;
  shortDescription:string;
  content:string;
  featuredImageUrl:string;
  urlHandled:string;
  publishedDate:Date;
  author:string;
  isVisible:boolean;
  categories:string[]
}
