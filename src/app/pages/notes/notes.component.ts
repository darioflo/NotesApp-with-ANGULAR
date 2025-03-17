import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NotesService } from '../../services/notes.service';
import { NgFor } from '@angular/common';
import { FormNotesComponent } from '../../components/form-notes/form-notes.component';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NgFor,FormNotesComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {


  constructor(public notesServices : NotesService){ }

  updatedTitle(id:string | undefined , e: Event){
    if(!id) return
    const inputElement = e.target as HTMLInputElement;
    this.notesServices.updatedTitle(id,inputElement.value)
  }

  updatedMarked(id:string | undefined){
    if(!id) return
    this.notesServices.updatedMarked(id)
  }

  noteDelete(id: string){
    console.log(id);
    this.notesServices.deleteNote(id)
  }
}
