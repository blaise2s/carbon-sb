import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oid-tag',
  templateUrl: './oid-tag.component.html',
  styleUrls: ['./oid-tag.component.scss'],
})
export class OidTagComponent {
  @Input() oid: string;
}
