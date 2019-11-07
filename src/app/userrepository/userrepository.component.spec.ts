import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrepositoryComponent } from './userrepository.component';

describe('UserrepositoryComponent', () => {
  let component: UserrepositoryComponent;
  let fixture: ComponentFixture<UserrepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
