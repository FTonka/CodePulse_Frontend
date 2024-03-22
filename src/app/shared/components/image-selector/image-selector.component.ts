import { Component } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent {
  private file?:File;
  fileName:string ='';
  title:string = '';

  constructor(private imgService:ImageServiceService){

  }
  onFileUploadChange(event:Event ):void{
    const element=event.currentTarget as HTMLInputElement;
    this.file=element.files?.[0];

  }
  uploadImage():void{
    if(this.file && this.fileName!=='' && this.title!==''){
      this.imgService.uploadImage(this.file, this.fileName, this.title).subscribe({
        next:(response)=>{
          console.log(response);
        }
      })
    }
  }

}
