import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from 'src/app/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{
  model:AddCategoryRequest;
  private addCategorySubscription?: Subscription

  constructor(private service:CategoryService){
    this.model={
      name:'',
      urlHandle:''
    };
  }
  OnSubmit(){
    this.addCategorySubscription=this.service.addCategory(this.model).subscribe({
      next:(response)=>{
        console.log('This was successfull!');
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
