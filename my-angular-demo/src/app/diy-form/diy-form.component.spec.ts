import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyFormComponent } from './diy-form.component';

describe('DiyFormComponent', () => {
  let component: DiyFormComponent;
  let fixture: ComponentFixture<DiyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
