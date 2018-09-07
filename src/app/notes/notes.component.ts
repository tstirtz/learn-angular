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
      "content": "Click on 'New Note' in the bottom right hand corner to create a new note",
      "id": 0
    },
  ];
  
  addNote(note: object): void {
    this.notes.push(note);
  };

  removeNote(event: any): void {
    console.log(event);
    this.notes = this.notes.filter((note, index) => {
      return note.id != parseInt(event.target.id);
    })
  }
}