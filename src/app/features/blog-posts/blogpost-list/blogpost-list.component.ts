import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  blogPosts$?:Observable<BlogPost[]>;

  constructor(private service:BlogPostService){

  }
  ngOnInit(): void {
    this.blogPosts$=this.service.getAllBlogPosts();
  }

}
