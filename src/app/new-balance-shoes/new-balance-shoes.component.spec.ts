import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBalanceShoesComponent } from './new-balance-shoes.component';

describe('NewBalanceShoesComponent', () => {
  let component: NewBalanceShoesComponent;
  let fixture: ComponentFixture<NewBalanceShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBalanceShoesComponent]
    });
    fixture = TestBed.createComponent(NewBalanceShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
