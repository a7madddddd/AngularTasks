import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecriptionComponent } from './sub-secription.component';

describe('SubSecriptionComponent', () => {
  let component: SubSecriptionComponent;
  let fixture: ComponentFixture<SubSecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubSecriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
