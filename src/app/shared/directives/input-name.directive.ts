import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInputName]'
})
export class InputNameDirective {

  @Input() latestInputValue: string

  el: HTMLInputElement
  forbiddenSybols = '^(?=.*[!@#$%^&(),.+=/\\]\\[{}?><":;1234567890|])'

  constructor(private elementRef: ElementRef,
              private r: Renderer2) {
    this.el = elementRef.nativeElement
  }

  @HostListener('keyup', ['$event']) onkeyup(): void {
    const invalidInput = new RegExp(this.forbiddenSybols).test(this.el.value)

    if (invalidInput) {
      this.r.addClass(this.el, 'red-text')
    } else {
      this.r.removeClass(this.el, 'red-text')
    }
  }
}
