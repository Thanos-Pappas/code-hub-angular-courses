import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnChanges, OnDestroy {
  @Input() notification: boolean;
  @Output() onChanges = new EventEmitter<boolean>();
  @Output() onDestroy = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.emit(true);
  }

  ngOnDestroy(): void {
    this.onDestroy.emit(true);
  }
}
