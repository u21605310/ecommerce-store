import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasShoesComponent } from './adidas-shoes.component';

describe('AdidasShoesComponent', () => {
  let component: AdidasShoesComponent;
  let fixture: ComponentFixture<AdidasShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdidasShoesComponent]
    });
    fixture = TestBed.createComponent(AdidasShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
