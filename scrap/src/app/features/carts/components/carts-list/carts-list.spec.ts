import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsList } from './carts-list';

describe('CartsList', () => {
  let component: CartsList;
  let fixture: ComponentFixture<CartsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
