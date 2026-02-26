import { Component } from '@angular/core';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserProfile } from './models/user-profile';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, UserStatusComponent, UserBioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: UserProfile = {
    id: 1,
    fullName: 'Ariana Blake',
    age: 29,
    title: 'Frontend Engineer',
    location: 'Austin, TX',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    isOnline: true,
    bio: 'I build polished web experiences and mentor junior developers. I also love trail running and specialty coffee.'
  };

  onStatusChanged(isOnline: boolean): void {
    this.user = { ...this.user, isOnline };
  }

  onBioSaved(bio: string): void {
    this.user = { ...this.user, bio };
  }
}
