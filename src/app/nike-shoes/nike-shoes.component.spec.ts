import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeShoesComponent } from './nike-shoes.component';

describe('NikeShoesComponent', () => {
  let component: NikeShoesComponent;
  let fixture: ComponentFixture<NikeShoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NikeShoesComponent]
    });
    fixture = TestBed.createComponent(NikeShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
