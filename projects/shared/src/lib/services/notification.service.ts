import { inject, Injectable } from '@angular/core';

import { CustomEventService } from './custom-event.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

	private readonly customEventService = inject(CustomEventService);

}
