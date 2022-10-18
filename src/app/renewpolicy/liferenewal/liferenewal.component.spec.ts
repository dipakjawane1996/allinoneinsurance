import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiferenewalComponent } from './liferenewal.component';

describe('LiferenewalComponent', () => {
  let component: LiferenewalComponent;
  let fixture: ComponentFixture<LiferenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiferenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiferenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
