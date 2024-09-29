import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServicesComponent } from './sub-services.component';

describe('SubServicesComponent', () => {
  let component: SubServicesComponent;
  let fixture: ComponentFixture<SubServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
