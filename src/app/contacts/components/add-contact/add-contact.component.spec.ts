import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

import { AddContactComponent } from './add-contact.component';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactComponent ],
      providers: [ContactService],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // positive test spec
  it('has valid form when all fields are correctly filled', () => {
    component.addContactForm?.controls['name'].setValue('John');
    component.addContactForm?.controls['phone'].setValue('12312');
    component.addContactForm?.controls['email'].setValue('j@k.com');
    expect(component.addContactForm.valid).toBeTruthy();
  });

  // negative test spec
  it('has invalid form when all fields are not filled', () => {
    component.addContactForm?.controls['name'].setValue('');
    component.addContactForm?.controls['phone'].setValue('');
    component.addContactForm?.controls['email'].setValue('');
    expect(component.addContactForm.valid).toBeFalsy();
  });
});
