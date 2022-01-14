import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaliComponent } from './product-detali.component';

describe('ProductDetaliComponent', () => {
  let component: ProductDetaliComponent;
  let fixture: ComponentFixture<ProductDetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
