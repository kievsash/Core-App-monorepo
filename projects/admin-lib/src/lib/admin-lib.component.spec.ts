import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibComponent } from './admin-lib.component';

describe('AdminLibComponent', () => {
  let component: AdminLibComponent;
  let fixture: ComponentFixture<AdminLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
