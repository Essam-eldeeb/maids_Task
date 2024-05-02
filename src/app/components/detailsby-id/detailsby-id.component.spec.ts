import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbyIdComponent } from './detailsby-id.component';

describe('DetailsbyIdComponent', () => {
  let component: DetailsbyIdComponent;
  let fixture: ComponentFixture<DetailsbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsbyIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
