import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-section-block',
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss'],
})
export class SectionBlockComponent {
  @Input() padding: number = 8;
  @Input() margin: number = 8;
}
