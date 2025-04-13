import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoListComponent } from './cuidado-list.component';

describe('CuidadoListComponent', () => {
  let component: CuidadoListComponent;
  let fixture: ComponentFixture<CuidadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuidadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
