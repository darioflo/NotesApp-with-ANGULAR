import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NotesService } from '../../services/notes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NgFor],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {


  constructor(public notesServices : NotesService){

  }

}
