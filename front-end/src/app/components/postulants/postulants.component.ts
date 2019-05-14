import { Component, OnInit } from '@angular/core';
import {PostulantService} from '../../services/postulant.service';
import { NgForm } from '@angular/forms';

import { Postulant } from 'src/app/models/postulant';

declare var M: any;

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.css'],
  providers: [PostulantService]
})
export class PostulantsComponent implements OnInit {
  
  constructor(private postulantService: PostulantService) { }

  ngOnInit() {
    this.getPostulants();
  }

  addPostulant(form : NgForm){
    if(form.value._id){
      this.postulantService.putPostulant(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html:'Updated successfuly' });
        this.getPostulants();
      })
    }else{
        this.postulantService.postPostulant(form.value)
          .subscribe(res => {
        this.resetForm(form);
        M.toast({html:'save successfuly' });
        this.getPostulants();
        
      });
    }

  }


  getPostulants(){
    this.postulantService.getPostulants()
    .subscribe(res => {
      this.postulantService.postulants = res as Postulant[];
      console.log(res);
    });

  }
  editPostulant(postulant : Postulant){
    this.postulantService.selectedPostulante = postulant;
  }
  
  deletePostulant(_id: string){
    if(confirm('Are you sure you want to delete it?')){
      this.postulantService.deletePostulant(_id)
      .subscribe(res=>{
        this.getPostulants();
        M.toast({html:'Deleted Succefully'});
      });

    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.postulantService.selectedPostulante= new Postulant;
    }

  }
}
