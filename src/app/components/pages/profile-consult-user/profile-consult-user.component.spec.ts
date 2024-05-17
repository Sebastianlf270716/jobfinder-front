import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConsultUserComponent } from './profile-consult-user.component';

describe('ProfileConsultUserComponent', () => {
  let component: ProfileConsultUserComponent;
  let fixture: ComponentFixture<ProfileConsultUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileConsultUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileConsultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
