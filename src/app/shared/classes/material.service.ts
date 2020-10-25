import {ElementRef} from '@angular/core';

declare var M

export interface Chip {
  tag?: string
}
export interface MaterialInstance {
  addChip?({}: Chip): void
  deleteChip?(): void
  selectChip?(): void
}
export interface MaterialMethods {
  open?(): void
  close?(): void
  recalculateDimension?(): void
  destroy?(): void
}

export class MaterialService {
  static initChips(ref: ElementRef, option: {} = {}): MaterialInstance {
    return M.Chips.init(ref.nativeElement, option)
  }

  static initDropdown(ref: ElementRef): MaterialMethods {
    return M.Dropdown.init(ref);
  }
}
