import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomnavbarComponent } from './customnavbar.component';

describe('CustomnavbarComponent', () => {
  let component: CustomnavbarComponent;
  let fixture: ComponentFixture<CustomnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
