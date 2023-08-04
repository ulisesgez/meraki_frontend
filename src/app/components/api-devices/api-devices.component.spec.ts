import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDevicesComponent } from './api-devices.component';

describe('ApiDevicesComponent', () => {
  let component: ApiDevicesComponent;
  let fixture: ComponentFixture<ApiDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiDevicesComponent]
    });
    fixture = TestBed.createComponent(ApiDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
