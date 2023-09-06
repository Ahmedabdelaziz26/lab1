import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidComponent } from './asid.component';

describe('AsidComponent', () => {
  let component: AsidComponent;
  let fixture: ComponentFixture<AsidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsidComponent]
    });
    fixture = TestBed.createComponent(AsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
