import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  //readmore variable, its true than read more string will print
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  
  id:number=0;
  title:string="";
  content:string="";
  data?:Note;
  
  @Output()
  addingData:EventEmitter<any>=new EventEmitter<any>();
  constructor(private addNotes:NoteService){}

  addNote()
  {
    this.data={ id:this.id,
      title:this.title,
      content:this.content
    }
    this.addNotes.addNote(this.data).subscribe({
      next:d=>{alert(`Note Added`)
      this.addingData.emit(this.data);},
      error:e=>{alert(`Error : ${e}`)}
    });
  }
}
