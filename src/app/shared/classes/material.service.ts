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

export class MaterialService {
  static initChips(ref: ElementRef, option: {} = {}): MaterialInstance {
    return M.Chips.init(ref.nativeElement, option)
  }
}
