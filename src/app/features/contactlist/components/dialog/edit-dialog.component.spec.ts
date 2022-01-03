import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogRef } from '@angular/material/dialog';

import { SharedModule } from 'src/app/modules/shared';
import { EditDialogComponent } from './edit-dialog.component';

describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {},
          },
        },
      ],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cancel the dialog', () => {
    jest.spyOn(component.dialogRef, 'close');

    // click button
    const button: DebugElement = debugElement.query(By.css('#button_cancel'));
    button.nativeElement.click();

    // should return empty value
    expect(component.dialogRef.close).toHaveBeenCalledWith('');
  });

  it('submit the dialog', () => {
    jest.spyOn(component.dialogRef, 'close');

    const button: DebugElement = debugElement.query(By.css('#button_submit'));

    // button must be disabled
    expect(button.attributes).toHaveProperty('disabled', 'true');

    // fill form
    component.editForm.controls['firstName'].setValue('Foo');
    component.editForm.controls['lastName'].setValue('Bar');

    fixture.detectChanges();

    // button must be enabled
    expect(button.attributes).not.toHaveProperty('disabled', 'true');

    // submit
    button.nativeElement.click();

    // should return the form value
    expect(component.dialogRef.close).toHaveBeenCalledWith({ address: '', email: '', firstName: 'Foo', lastName: 'Bar', phone: '' });
  });
});
