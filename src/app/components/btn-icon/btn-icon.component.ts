import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-icon',
  templateUrl: './btn-icon.component.html',
})
export class BtnIconComponent {
  @Input() srcImg!: string;

  @Input() color: string = 'bg-white';
  
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';

  get colors() {
    return {
      'bg-white hover:bg-gray-400 focus:ring-offset-gray-200':
        this.color === 'bg-white',
      'bg-green-400 hover:bg-gray-400 focus:ring-offset-gray-200':
        this.color === 'bg-green',
    };
  }
}
