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
  @Output() onChanges = new EventEmitter<void>();
  @Output() onDestroy = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.emit();
  }

  ngOnDestroy(): void {
    this.onDestroy.emit();
  }
}
