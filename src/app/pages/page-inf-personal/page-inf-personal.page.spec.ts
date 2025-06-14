import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageInfPersonalPage } from './page-inf-personal.page';

describe('PageInfPersonalPage', () => {
  let component: PageInfPersonalPage;
  let fixture: ComponentFixture<PageInfPersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
