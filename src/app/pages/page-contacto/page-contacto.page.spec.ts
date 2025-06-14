import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContactoPage } from './page-contacto.page';

describe('PageContactoPage', () => {
  let component: PageContactoPage;
  let fixture: ComponentFixture<PageContactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
