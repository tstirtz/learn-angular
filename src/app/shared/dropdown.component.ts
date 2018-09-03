import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html'
})
export class DropDownComponent{
  noteTitle: string = "";
  noteContent: string = "";
  dropDownRendered: boolean = false;
  @Output() newNoteCreated: EventEmitter<object> = 
    new EventEmitter<object>();

  toggleDropDown(): void{
    this.dropDownRendered = !this.dropDownRendered;
  };

  onClick(): void{
    this.newNoteCreated.emit(
      {
        "title": this.noteTitle,
        "content": this.noteContent
      }
    );
    this.clearForm();
  }

  clearForm(): void {
    this.noteTitle = "",
    this.noteContent = ""
  };
}