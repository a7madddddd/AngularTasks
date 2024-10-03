import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServicesAdminComponent } from './get-services-admin.component';

describe('GetServicesAdminComponent', () => {
  let component: GetServicesAdminComponent;
  let fixture: ComponentFixture<GetServicesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetServicesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetServicesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
