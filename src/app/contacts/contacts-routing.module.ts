import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const contactRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/:contactId', component: ContactDetailsComponent }, // contactId is the URL param
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes) // registering child/nested routes
  ],
  exports: [
    RouterModule // export it
  ]
})
export class ContactsRoutingModule { }
