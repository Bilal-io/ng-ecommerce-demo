import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationListSubject: BehaviorSubject<INotification[]> = new BehaviorSubject([]);
  public notificationList = this.notificationListSubject.asObservable();

  constructor() { }

  // push a new notification to the behaviorSubject
  addNotification(notification: INotification) {
    this.notificationListSubject.next([...this.notificationListSubject.getValue(), notification]);
  }

  // remove notification by id
  removeNotification(id: string) {
    this.notificationListSubject.next(this.notificationListSubject.getValue().filter(notification => notification.id !== id));
  }
}
