import { Subject } from 'rxjs';

export class BaseComponent {
  protected unsubscribe$ = new Subject<void>();

  unsubscribe() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
