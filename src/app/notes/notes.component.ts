import { Component } from "@angular/core";

@Component({
  templateUrl: './notes.component.html'
})
export class NotesComponent{
  noteTitle: string = "";
  noteContent: string = "";
  notes: any[] = [
    {
      "title": "Instructions",
      "content": "Click on 'New Note' in the bottom right hand corner to create a new note"
    },
  ];
  
  addNote(note: object): void {
    this.notes.push(note);
  };
}