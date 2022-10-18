import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthrenewalComponent } from './healthrenewal.component';

describe('HealthrenewalComponent', () => {
  let component: HealthrenewalComponent;
  let fixture: ComponentFixture<HealthrenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthrenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
