import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '../../../shared/src/lib/services/notification.service';

@Component({
  selector: 'app-root',
	imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
	protected readonly title = signal('header');
	private readonly notificationService = inject(NotificationService);

}
