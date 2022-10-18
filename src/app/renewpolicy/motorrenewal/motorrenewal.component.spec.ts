import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorrenewalComponent } from './motorrenewal.component';

describe('MotorrenewalComponent', () => {
  let component: MotorrenewalComponent;
  let fixture: ComponentFixture<MotorrenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorrenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
