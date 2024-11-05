import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomNumberComponent } from './input-custom-number.component';

describe('InputCustomNumberComponent', () => {
  let component: InputCustomNumberComponent;
  let fixture: ComponentFixture<InputCustomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
