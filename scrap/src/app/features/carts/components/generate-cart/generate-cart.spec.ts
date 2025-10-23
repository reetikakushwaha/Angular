import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCart } from './generate-cart';

describe('GenerateCart', () => {
  let component: GenerateCart;
  let fixture: ComponentFixture<GenerateCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
