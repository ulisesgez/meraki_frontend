import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClientsSearchMacComponent } from './api-clients-search-mac.component';

describe('ApiClientsSearchMacComponent', () => {
  let component: ApiClientsSearchMacComponent;
  let fixture: ComponentFixture<ApiClientsSearchMacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiClientsSearchMacComponent]
    });
    fixture = TestBed.createComponent(ApiClientsSearchMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
