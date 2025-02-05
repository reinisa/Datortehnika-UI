import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieprasijumsFormComponent } from './pieprasijums-form.component';

describe('PieprasijumsFormComponent', () => {
  let component: PieprasijumsFormComponent;
  let fixture: ComponentFixture<PieprasijumsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieprasijumsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieprasijumsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
