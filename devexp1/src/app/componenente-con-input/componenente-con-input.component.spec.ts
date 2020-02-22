import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenenteConInputComponent } from './componenente-con-input.component';

describe('ComponenenteConInputComponent', () => {
  let component: ComponenenteConInputComponent;
  let fixture: ComponentFixture<ComponenenteConInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenenteConInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenenteConInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
