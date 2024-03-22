import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { AddBlogPost } from '../models/add-blog-post.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../category/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit {

  model:AddBlogPost;
  categories$?:Observable<Category[]>;
  constructor(private service:BlogPostService, private router:Router,private categoryService:CategoryService){
    this.model={
      title:'',
      shortDescription:'',
      content:'',
      featuredImageUrl:'',
      urlHandled:'',
      publishedDate:new Date(),
      author:'',
      isVisible:true,
      categories:[]
    }
  }
  ngOnInit(): void {
      this.categories$=this.categoryService.getAllCategories();
  }

  OnFormSubmit():void{

    this.service.createBlogPost(this.model).subscribe({
      next:(response)=>{
        this.router.navigateByUrl("/admin/blogposts");
        console.log(this.model);
      }
    })
  }
}
