import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/blog-posts/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-posts/add-blogpost/add-blogpost.component';
import { EditBlogpostsComponent } from './features/blog-posts/edit-blogposts/edit-blogposts.component';
import { HomeComponent } from './features/public/home/home.component';
import { BlogDetailsComponent } from './features/public/blog-details/blog-details.component';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog/:url',
    component:BlogDetailsComponent
  },
  {
    path:'admin/categories',
    component:CategoryListComponent
  },
  {
    path:'admin/categories/add',
    component:AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  },
  {
    path:'admin/blogposts',
    component:BlogpostListComponent
  },
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  },
  {
    path:'admin/blogposts/add',
      component:AddBlogpostComponent
  },
  {
    path:'admin/blogposts/:id',
      component:EditBlogpostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
