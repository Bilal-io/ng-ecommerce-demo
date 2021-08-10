import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NotificationTypes } from '../../models/types';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {
  openNotifications: any;

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    this.notification.notificationList.subscribe(notifications => {
      this.openNotifications = notifications;
    })
  }

  dismiss(notification: any) {
    this.notification.removeNotification(notification.id);
  }

  snackDye(type: NotificationTypes): string {
    // switch on the type of notification
    switch (type) {
      case NotificationTypes.error:
        return 'bg-red-500';
      case NotificationTypes.info:
        return 'bg-blue-500';
      case NotificationTypes.success:
        return 'bg-green-500';
      case NotificationTypes.warning:
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  }

}
