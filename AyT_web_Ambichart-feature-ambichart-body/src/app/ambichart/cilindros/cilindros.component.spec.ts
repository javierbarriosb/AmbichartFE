import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CilindrosComponent } from './cilindros.component';

describe('CilindrosComponent', () => {
  let component: CilindrosComponent;
  let fixture: ComponentFixture<CilindrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CilindrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CilindrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
