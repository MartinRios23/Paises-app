import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styles: [],
})
export class PaisesInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(() => {
      this.onDebounce.emit(this.termino);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
