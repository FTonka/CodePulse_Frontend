import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../features/category/models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../features/category/models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../features/category/models/update-category-request-model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest):Observable<void>{
    return this.http.post<void>(`https://localhost:7169/api/categories/AddCategory`,model)
  }
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`https://localhost:7169/api/categories/GetAllCategories`)
  }
  getCategoryById(id:string):Observable<Category>{
    return this.http.get<Category>(`https://localhost:7169/api/categories/GetById/${id}`);
  }
  updateCategory(id:string, updateCategoryRequest:UpdateCategoryRequest):Observable<Category>{
    return this.http.put<Category>(`https://localhost:7169/api/categories/UpdateCategory/${id}`,updateCategoryRequest);
  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`https://localhost:7169/api/categories/DeleteCategory/${id}`);
  }
}
