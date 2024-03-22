import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../models/category.model';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories?: Category [];
  constructor(private service:CategoryService){

  }
  ngOnInit():void{
    this.service.getAllCategories().subscribe({
      next:(response)=>{
        this.categories=response;
      }
    })
  }


}
