import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-section-block',
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss'],
})
export class SectionBlockComponent {
  // 樣式設定
  @Input()
  @HostBinding('style.--padding')
  padding: number = 8;

  @Input()
  @HostBinding('style.--margin')
  margin: number = 16;

  @Input()
  @HostBinding('style.--border-color')
  borderColor: string = 'transparent';

  @Input()
  @HostBinding('style.--border-radius')
  borderRadius: number = 0;

  @Input()
  @HostBinding('style.--background')
  background: string = 'transparent';

  @Input()
  @HostBinding('style.--color')
  color: string = 'black';

  // head 和 content 中間顯示分隔線
  @Input() divider: boolean | string = false;
}
