import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOrganizationsComponent } from './api-organizations.component';

describe('ApiOrganizationsComponent', () => {
  let component: ApiOrganizationsComponent;
  let fixture: ComponentFixture<ApiOrganizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiOrganizationsComponent]
    });
    fixture = TestBed.createComponent(ApiOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
