import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDataTableComponent } from './shared-data-table.component';

describe('SharedDataTableComponent', () => {
  let component: SharedDataTableComponent;
  let fixture: ComponentFixture<SharedDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
