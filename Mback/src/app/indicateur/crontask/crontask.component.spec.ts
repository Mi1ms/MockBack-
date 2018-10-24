import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrontaskComponent } from './crontask.component';

describe('CrontaskComponent', () => {
  let component: CrontaskComponent;
  let fixture: ComponentFixture<CrontaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrontaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrontaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
