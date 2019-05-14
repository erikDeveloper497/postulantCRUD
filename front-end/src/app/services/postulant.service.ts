import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Postulant } from '../models/postulant';
import { PostulantsComponent } from '../components/postulants/postulants.component';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  selectedPostulante : Postulant;
  postulants: Postulant[];
  readonly URL_API='http://localhost:3000/api/postulants';

  constructor(private http: HttpClient) {
    this.selectedPostulante = new Postulant();
   }

  getPostulants(){
    return this.http.get(this.URL_API);

  }

  postPostulant(Postulant : Postulant){
    return this.http.post(this.URL_API, Postulant);
  }
  //genero =['F', 'M'];

  putPostulant(postulant: Postulant){
    return this.http.put(this.URL_API + `/${postulant._id}`, postulant);
  }

  deletePostulant(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
