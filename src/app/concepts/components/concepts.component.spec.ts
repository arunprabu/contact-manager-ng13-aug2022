import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';
import { CebComponent } from './ceb/ceb.component';

import { ConceptsComponent } from './concepts.component';
import { CpbComponent } from './cpb/cpb.component';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConceptsComponent,
        CebComponent,
        CpbComponent,
        EllipsisPipe
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
