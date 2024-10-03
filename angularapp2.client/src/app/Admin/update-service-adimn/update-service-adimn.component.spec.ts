import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceAdimnComponent } from './update-service-adimn.component';

describe('UpdateServiceAdimnComponent', () => {
  let component: UpdateServiceAdimnComponent;
  let fixture: ComponentFixture<UpdateServiceAdimnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateServiceAdimnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceAdimnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
