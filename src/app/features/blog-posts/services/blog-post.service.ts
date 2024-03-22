import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

  createBlogPost(data:AddBlogPost):Observable<void>{
    return this.http.post<void>('https://localhost:7169/api/BlogPost/AddBlogPost',data);
  }
  getAllBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>('https://localhost:7169/api/BlogPost/GetAllBlogPosts')
  }
  getBlogpostById(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://localhost:7169/api/BlogPost/${id}`);
  }
  getBlogPostByUrl(urlHandled:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://localhost:7169/api/BlogPost/${urlHandled}`);
  }
  updateBlogPost(id:string, updatedBlogPost:UpdateBlogPost):Observable<BlogPost>{
    return this.http.put<BlogPost>(`https://localhost:7169/api/BlogPost/${id}`,updatedBlogPost)
  }
  deleteBlogPost(id:string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`https://localhost:7169/api/BlogPost/${id}`)
  }

}
