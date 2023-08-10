import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaShoesComponent } from './puma-shoes.component';

describe('PumaShoesComponent', () => {
  let component: PumaShoesComponent;
  let fixture: ComponentFixture<PumaShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PumaShoesComponent]
    });
    fixture = TestBed.createComponent(PumaShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
