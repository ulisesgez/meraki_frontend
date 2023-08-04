import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbClientsSearchMacComponent } from './db-clients-search-mac.component';

describe('DbClientsSearchMacComponent', () => {
  let component: DbClientsSearchMacComponent;
  let fixture: ComponentFixture<DbClientsSearchMacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbClientsSearchMacComponent]
    });
    fixture = TestBed.createComponent(DbClientsSearchMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
