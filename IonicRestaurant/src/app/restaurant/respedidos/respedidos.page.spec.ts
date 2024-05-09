import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespedidosPage } from './respedidos.page';

describe('RespedidosPage', () => {
  let component: RespedidosPage;
  let fixture: ComponentFixture<RespedidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RespedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
