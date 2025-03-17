import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import Notes from '../../models/Notes';


@Component({
  selector: 'app-form-notes',
  imports: [ReactiveFormsModule],
  templateUrl: './form-notes.component.html',
  styleUrl: './form-notes.component.css'
})
export class FormNotesComponent {

  formNote : FormGroup
  constructor(public servicesNotes : NotesService){
    this.formNote = new FormGroup ({
      id :  new FormControl(this.servicesNotes.createID()),
      title : new FormControl(''),
      marked: new FormControl(true)
    })
  }


  aggNote(note: Notes){
    if(!note.title) return
    note.title = this.formNote.value.title
    console.log(note);
    this.servicesNotes.addNote(note)
    this.formNote.reset({
      id: this.servicesNotes.createID(),
      title: '',
      marked: true,
    });
  }

}
