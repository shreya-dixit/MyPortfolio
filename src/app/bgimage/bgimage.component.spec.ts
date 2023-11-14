import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgimageComponent } from './bgimage.component';

describe('BgimageComponent', () => {
  let component: BgimageComponent;
  let fixture: ComponentFixture<BgimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgimageComponent]
    });
    fixture = TestBed.createComponent(BgimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
