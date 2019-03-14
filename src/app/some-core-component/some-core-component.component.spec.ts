import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeCoreComponentComponent } from './some-core-component.component';

describe('SomeCoreComponentComponent', () => {
  let component: SomeCoreComponentComponent;
  let fixture: ComponentFixture<SomeCoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeCoreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeCoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
