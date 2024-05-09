import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatcajasPage } from './catcajas.page';

describe('CatcajasPage', () => {
  let component: CatcajasPage;
  let fixture: ComponentFixture<CatcajasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatcajasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
