import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  @Input({ required: true }) isOnline = false;
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus(): void {
    this.statusChanged.emit(!this.isOnline);
  }
}
