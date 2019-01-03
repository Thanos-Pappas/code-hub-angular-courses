import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef, Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
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
    AfterViewChecked {

  email: string = "";
  password: string = "";
  notification: boolean = false;
  logs:  { color: string, phase: string }[] = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  lifecycle: { color: string, phase: string }[] = [
    {"color": "green", "phase": "ngOnInit"},
    {"color": "red", "phase": "ngAfterContentChecked"},
    {"color": "fuchsia", "phase": "ngAfterContentInit"},
    {"color": "blue", "phase": "ngAfterViewChecked"},
    {"color": "orange", "phase": "ngAfterViewInit"},
    {"color": "purple", "phase": "ngDoCheck"},
    {"color": "black", "phase": "ngOnChanges"}
  ];

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

  ngAfterContentInit(): void {
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

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
