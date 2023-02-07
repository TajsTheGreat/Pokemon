import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataComponent } from './fetchdata.component';

describe('TestComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});