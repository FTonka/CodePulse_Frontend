import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-posts/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-posts/models/blog-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  blogPosts$?:Observable<BlogPost[]>

  constructor(private blogpostService:BlogPostService){

  }
  ngOnInit(): void {
    this.blogPosts$=this.blogpostService.getAllBlogPosts();

  }

}
