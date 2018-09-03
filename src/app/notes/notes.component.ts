import { Component } from "@angular/core";

@Component({
  selector: 'notes-component',
  templateUrl: './notes.component.html'
})
export class NotesComponent{
  noteTitle: string = "";
  noteContent: string = "";
  notes: any[] = [
    {
      "title": "Test Title",
      "content": "Test content"
    },
  ];
  
  addNote(note: object): void {
    this.notes.push(note);
  };
}