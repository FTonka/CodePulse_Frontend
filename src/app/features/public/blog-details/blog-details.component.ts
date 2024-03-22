import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../blog-posts/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-posts/models/blog-post.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  url: string | null=null;
  blogPosts$?:Observable<BlogPost>;
  constructor(private activatedRoute:ActivatedRoute, private blogService:BlogPostService){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.url=params.get('url');
      }
    });
    if(this.url){
      this.blogPosts$=this.blogService.getBlogPostByUrl(this.url);
    }
  };

}
