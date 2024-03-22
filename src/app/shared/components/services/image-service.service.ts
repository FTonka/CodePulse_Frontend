import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogImage } from '../image-selector/models/blog-images.model';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http:HttpClient) {


   }
   uploadImage(file:File,fileName: string, title:string):Observable<BlogImage>{
      const formData=new FormData();
      formData.append('file',file);
      formData.append('fileName',fileName);
      formData.append('title',title)

      return this.http.post<BlogImage>(`https://localhost:7169/api/BlogImage`,formData)
   }
}
