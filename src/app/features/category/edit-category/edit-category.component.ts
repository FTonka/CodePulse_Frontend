import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request-model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {
  id:string |null=null;
  paramsSubscription?:Subscription;
  category?:Category ;
  editCategorySubscription?:Subscription;
  onDeleteSubscription?:Subscription;
  constructor(private route:ActivatedRoute, private service:CategoryService, private router:Router){

  }

  ngOnInit(): void {
    this.paramsSubscription=this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');
        if(this.id){
          this.service.getCategoryById(this.id).subscribe({
            next:(response)=>{
              this.category=response;
            }
          })
        }
      }
    });
  }
  ngOnDestroy(): void {
      this.paramsSubscription?.unsubscribe();
      this.editCategorySubscription?.unsubscribe();
      this.onDeleteSubscription?.unsubscribe();
  }
  OnDelete():void{
    if(this.id){
    this.onDeleteSubscription=this.service.deleteCategory(this.id).subscribe({
      next:(response)=>{
        console.log(response);
        this.router.navigateByUrl("/admin/categories");
      }
    })

    }}
  onFormSubmit():void{
    const updatedCategoryRequest:UpdateCategoryRequest={
      name:this.category?.name ?? '',
      urlHandle:this.category?.urlHandle ?? ''
    };
    if(this.id){
    this.editCategorySubscription=this.service.updateCategory(this.id,updatedCategoryRequest).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/categories');
      }
    });
  }
  }

}
