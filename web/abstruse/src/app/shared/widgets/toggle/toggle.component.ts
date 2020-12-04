import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: ToggleComponent, multi: true }]
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() label = '';

  isEnabled!: boolean;

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  get value(): boolean {
    return this.isEnabled;
  }

  set value(val: boolean) {
    this.isEnabled = val;
    this.onChangeCallback(this.isEnabled);
  }

  toggle(): void {
    this.value = !this.value;
  }

  writeValue(val: boolean): void {
    this.isEnabled = val;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
