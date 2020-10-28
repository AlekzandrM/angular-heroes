import {ElementRef} from '@angular/core';

declare const M

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
}
