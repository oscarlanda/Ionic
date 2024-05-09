import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductosItemComponent } from './productos-item.component';

describe('ProductosItemComponent', () => {
  let component: ProductosItemComponent;
  let fixture: ComponentFixture<ProductosItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductosItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
