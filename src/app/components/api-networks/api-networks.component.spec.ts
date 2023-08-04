import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNetworksComponent } from './api-networks.component';

describe('ApiNetworksComponent', () => {
  let component: ApiNetworksComponent;
  let fixture: ComponentFixture<ApiNetworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiNetworksComponent]
    });
    fixture = TestBed.createComponent(ApiNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
