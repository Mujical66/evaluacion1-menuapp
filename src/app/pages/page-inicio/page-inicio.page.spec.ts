import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageInicioPage } from './page-inicio.page';

describe('PageInicioPage', () => {
  let component: PageInicioPage;
  let fixture: ComponentFixture<PageInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
