import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarVendedorComponent } from './dashboard-vendedor.component';

describe('DashboarVendedorComponent', () => {
  let component: DashboarVendedorComponent;
  let fixture: ComponentFixture<DashboarVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
