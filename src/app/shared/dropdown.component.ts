import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html'
})
export class DropDownComponent{
  noteTitle: string = "";
  noteContent: string = "";
  dropDownRendered: boolean = false;
  idCounter = 0;
  @Output() newNoteCreated: EventEmitter<object> = 
    new EventEmitter<object>();

  toggleDropDown(): void{
    this.dropDownRendered = !this.dropDownRendered;
  };

  onClick(): void{
    this.idCounter += 1;
    this.newNoteCreated.emit(
      {
        "title": this.noteTitle,
        "content": this.noteContent,
        "id": this.idCounter
      }
    );
    this.clearForm();
  }

  clearForm(): void {
    this.noteTitle = "",
    this.noteContent = ""
  };
}