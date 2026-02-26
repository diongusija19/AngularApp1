import { Component, Input } from '@angular/core';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({ required: true }) user!: UserProfile;
}
