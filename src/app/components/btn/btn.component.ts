import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() btnType: 'button' | 'submit' | 'reset' = 'button';

  @Input() btnTextPosition: 'text-left' | 'text-right' | 'text-center' = 'text-center';

  @Input() color: string = 'primary';

  get botonStyle() {
    return {
      'text-black':
        this.color.includes('light'),
      'text-white':
        !this.color.includes('light'),
      'text-left':
        this.btnTextPosition === 'text-left',
      'text-right':
        this.btnTextPosition === 'text-right',
      'text-center':
        this.btnTextPosition === 'text-center',
      'bg-success hover:bg-green-800 focus:ring-green-300':
        this.color === 'success',
      'bg-primary hover:bg-primary-800 focus:ring-primary-300':
        this.color === 'primary',
      'bg-red-600 hover:bg-red-800 focus:ring-red-300':
        this.color === 'red',
      'bg-sky-600 hover:bg-sky-800 focus:ring-sky-300':
        this.color === 'sky',
      'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50':
        this.color === 'gray-light',
    };
  }
}
