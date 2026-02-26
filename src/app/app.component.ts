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
    fullName: 'Dion Gusija',
    age: 26,
    title: 'Frontend Engineer',
    location: 'London, Ontario',
    profileImage:
      'https://api.dicebear.com/9.x/adventurer/svg?seed=Dion-Male-Profile',
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
