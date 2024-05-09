import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResmesasPage } from './resmesas.page';

describe('ResmesasPage', () => {
  let component: ResmesasPage;
  let fixture: ComponentFixture<ResmesasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
