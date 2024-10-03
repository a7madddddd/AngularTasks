import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusretrationUsersComponent } from './RegusretrationUsersComponent';

describe('RegusretrationUsersComponent', () => {
  let component: RegusretrationUsersComponent;
  let fixture: ComponentFixture<RegusretrationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegusretrationUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegusretrationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
