import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosAddPage } from './productos-add.page';

describe('ProductosAddPage', () => {
  let component: ProductosAddPage;
  let fixture: ComponentFixture<ProductosAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
