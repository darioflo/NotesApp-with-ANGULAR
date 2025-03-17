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

  

  updatedTitle(id:string, newTitle:string){
    this.notes.forEach(note => {
      if (note.id === id) {
        note.title = newTitle
      }
    })
  }

  updatedMarked(id:string,){
    const updatedMarked = this.notes.find(note=> note.id === id)
    if (!updatedMarked) return
    updatedMarked.marked = !updatedMarked.marked 
  }

  createID = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2)
  }


  addNote(newNote: Notes): void{
    console.log(newNote);
    this.notes.unshift(newNote)
  }

  deleteNote(id : string){
    console.log(id);
    this.notes = this.notes.filter(notes => notes.id !== id)
    console.log(this.notes);
  }


}
