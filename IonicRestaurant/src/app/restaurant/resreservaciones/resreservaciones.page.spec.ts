import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResreservacionesPage } from './resreservaciones.page';

describe('ResreservacionesPage', () => {
  let component: ResreservacionesPage;
  let fixture: ComponentFixture<ResreservacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResreservacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
