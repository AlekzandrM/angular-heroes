import {ElementRef} from '@angular/core';
import * as M from '../../../assets/materialize-v1.0.0/materialize/js/materialize.js'

export interface Chip {
  tag?: string
}
export interface MaterialChips {
  addChip?({}: Chip): void
  deleteChip?(): void
  selectChip?(): void
}
export interface MaterialDropdown {
  open?(): void
  close?(): void
  recalculateDimension?(): void
  destroy?(): void
}
export interface MaterialFormSelect {
  getSelectedValues?(): void
  destroy?(): void
}
export interface MaterialCarousel {
  next?(): void
  prev?(): void
  set?(): void
  destroy?(): void
}

export class MaterialService {
  static initChips(ref: ElementRef, option: {} = {}): MaterialChips {
    return M.Chips.init(ref.nativeElement, option)
  }
  static initDropdown(ref: ElementRef): MaterialDropdown {
    return M.Dropdown.init(ref);
  }
  static initFormSelect(ref: ElementRef, options: {} = {}): MaterialFormSelect {
    return M.FormSelect.init(ref.nativeElement, options)
  }
  static initCarousel(ref: ElementRef): MaterialCarousel {
    return M.Carousel.init(ref.nativeElement, {
      duration: 400,
      fullWidth: true,
      indicators: true,
      numVisible: 1
    })
  }
}
