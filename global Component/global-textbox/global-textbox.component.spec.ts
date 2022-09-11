import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTextboxComponent } from './global-textbox.component';

describe('GlobalTextboxComponent', () => {
  let component: GlobalTextboxComponent;
  let fixture: ComponentFixture<GlobalTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
