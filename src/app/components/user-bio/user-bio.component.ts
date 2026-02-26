import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css'
})
export class UserBioComponent {
  @Input({ required: true }) bio = '';
  @Output() bioSaved = new EventEmitter<string>();

  draftBio = '';
  editing = false;

  startEditing(): void {
    this.draftBio = this.bio;
    this.editing = true;
  }

  saveBio(): void {
    this.bioSaved.emit(this.draftBio.trim() || this.bio);
    this.editing = false;
  }

  cancelEditing(): void {
    this.draftBio = this.bio;
    this.editing = false;
  }
}
