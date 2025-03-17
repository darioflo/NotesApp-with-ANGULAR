import { Injectable } from '@angular/core';
import Notes from '../models/Notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes:Notes[]

  constructor() {
    this.notes = [
      {
        id:this.createID(),
        title:"Cita medica",
        marked:true
      },
      {
        id:this.createID(),
        title: "Contraseña del wifi: 1234",
        marked: true
      }
    ]
  }


  createID = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2)
  }
}
