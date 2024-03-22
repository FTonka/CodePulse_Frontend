import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../category/models/category.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Component({
  selector: 'app-edit-blogposts',
  templateUrl: './edit-blogposts.component.html',
  styleUrls: ['./edit-blogposts.component.css']
})
export class EditBlogpostsComponent implements OnInit, OnDestroy{
  id:string |null=null;
  routeSubscription?:Subscription
  model?:BlogPost
  categories$?:Observable<Category[]>;
  selectedCategories?:string[];
  updatedModel?:UpdateBlogPost
  updateBlogPost?:Subscription
  getBlogPost?:Subscription
  deleteSubscription?:Subscription;
  isImageSelectorVisible:boolean=false;

  constructor(private route:ActivatedRoute, private blogPostservice:BlogPostService,
              private categoryService:CategoryService, private router:Router){

  }
  ngOnInit(): void {

    this.categories$=this.categoryService.getAllCategories();

      this.routeSubscription=this.route.paramMap.subscribe({
        next:(params)=>{
          this.id=params.get('id');
          if(this.id){
            this.getBlogPost=this.blogPostservice.getBlogpostById(this.id).subscribe({
              next:(response)=>{
                this.model=response;
                this.selectedCategories=response.categories.map(x=>x.id);
              }
            })
          }
        }
      })
  }
  OnFormSubmit():void{
    if(this.model && this.id){
      var updateBlogPost:UpdateBlogPost={
        author:this.model.author,
        content:this.model.content,
        shortDescription:this.model.shortDescription,
        featuredImageUrl:this.model.featuredImageUrl,
        isVisible:this.model.isVisible,
        publishedDate:this.model.publishedDate,
        title:this.model.title,
        urlHandled:this.model.urlHandled,
        categories:this.selectedCategories ?? []
      }
      this.updateBlogPost=this.blogPostservice.updateBlogPost(this.id,updateBlogPost).subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/blogposts')
          console.log(response);

        }
      })
    }
  }

  OnDelete():void{
    if(this.id){
    this.deleteSubscription=this.blogPostservice.deleteBlogPost(this.id).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/blogposts');

      }
    })
  }
  }
  openImageSelector():void{
   this.isImageSelectorVisible=true;
  }
  closeImageSelector():void{
    this.isImageSelectorVisible=false;
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateBlogPost?.unsubscribe();
    this.getBlogPost?.unsubscribe();
    this.deleteSubscription?.unsubscribe()
}


}
