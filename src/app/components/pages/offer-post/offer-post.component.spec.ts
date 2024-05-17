import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPostComponent } from './offer-post.component';

describe('OfferPostComponent', () => {
  let component: OfferPostComponent;
  let fixture: ComponentFixture<OfferPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
