import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubServiceComponent } from './single-sub-service.component';

describe('SingleSubServiceComponent', () => {
  let component: SingleSubServiceComponent;
  let fixture: ComponentFixture<SingleSubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSubServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
