import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  email: string = "";
  password: string = "";
  notification: boolean = false;
  logs: { color: string, phase: string }[] = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  lifecycle: { color: string, phase: string }[] = [
    {"color": "green", "phase": "ngOnInit"}, // 0
    {"color": "red", "phase": "ngAfterContentChecked"},// 1
    {"color": "fuchsia", "phase": "ngAfterContentInit"}, // 2
    {"color": "blue", "phase": "ngAfterViewChecked"}, // 3
    {"color": "orange", "phase": "ngAfterViewInit"}, // 4
    {"color": "purple", "phase": "ngDoCheck"}, // 5
    {"color": "lime", "phase": "ngOnChanges"}, // 6
    {"color": "teal", "phase": "ngOnDestroy"} // 7
  ];
  notificationComponents = [0];

  clearForm(): void {
    this.password = "";
    this.email = "";
  }

  submitForm(): void {
    this.password = "";
    this.email = "";
    this.notification = true;
    setTimeout(() => {
      this.notification = false;
    }, 2000);
  }

  constructor() {
  }

  ngOnInit() {
    this.logs.push(this.lifecycle[0]);
  }

  ngAfterContentChecked(): void {
    this.logs.push(this.lifecycle[1]);
  }

  ngAfterContentInit(): void { //Only once
    this.logs.push(this.lifecycle[2]);
  }

  ngAfterViewChecked(): void {
    this.logs.push(this.lifecycle[3]);
    this.scrollToBottom();
  }

  ngAfterViewInit(): void {
    this.logs.push(this.lifecycle[4]);
  }

  ngDoCheck(): void {
    this.logs.push(this.lifecycle[5]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push(this.lifecycle[6]);
  }

  ngOnDestroy(): void {
    this.logs.push(this.lifecycle[7]);
  }

  destroyComponent(): void {
   this.notificationComponents.splice(0,1);
  }
  addComponent(): void {
    this.notificationComponents.push( this.notificationComponents.length);
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
