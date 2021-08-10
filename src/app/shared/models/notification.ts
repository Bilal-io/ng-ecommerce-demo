import { nanoid } from 'nanoid';
import { NotificationTypes } from './types';

export class INotification {
  public id: string;
  public title: string;
  public message: string;
  public type: NotificationTypes;

  constructor(data: any) {
    this.id = nanoid(); // generate a unique id
    this.title = data.title;
    this.message = data.message;
    this.type = data.type;
  }
}
