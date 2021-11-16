import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinsDetailsComponent } from './besoins-details.component';

describe('BesoinsDetailsComponent', () => {
  let component: BesoinsDetailsComponent;
  let fixture: ComponentFixture<BesoinsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoinsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
