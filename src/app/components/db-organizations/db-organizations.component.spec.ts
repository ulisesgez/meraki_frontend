import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbOrganizationsComponent } from './db-organizations.component';

describe('DbOrganizationsComponent', () => {
  let component: DbOrganizationsComponent;
  let fixture: ComponentFixture<DbOrganizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbOrganizationsComponent]
    });
    fixture = TestBed.createComponent(DbOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
