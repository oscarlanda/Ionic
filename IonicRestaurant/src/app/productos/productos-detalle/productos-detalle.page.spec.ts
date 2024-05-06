import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosDetallePage } from './productos-detalle.page';

describe('ProductosDetallePage', () => {
  let component: ProductosDetallePage;
  let fixture: ComponentFixture<ProductosDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
