import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConsultEmployerComponent } from './profile-consult-employer.component';

describe('ProfileConsultEmployerComponent', () => {
  let component: ProfileConsultEmployerComponent;
  let fixture: ComponentFixture<ProfileConsultEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileConsultEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileConsultEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
