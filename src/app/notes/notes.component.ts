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
  
  addNote(): void {
    console.log(this.noteTitle);
    console.log(this.noteContent);
    this.notes.push(
      {
      "title": this.noteTitle,
      "content": this.noteContent
      }
    );
    this.clearForm();
  };

  clearForm(): void {
    this.noteTitle = "",
    this.noteContent = ""
  };
}