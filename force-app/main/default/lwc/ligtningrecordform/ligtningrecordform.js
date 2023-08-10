import { LightningElement,api } from 'lwc';
import First_Name_FIELD from '@salesforce/schema/Contact.FirstName';
import Last_Name_FIELD from '@salesforce/schema/Contact.LastName';
import Phone_FIELD from '@salesforce/schema/Contact.Phone';
import Email_FIELD from '@salesforce/schema/Contact.Email';
export default class Ligtningrecordform extends LightningElement {
    fields=[First_Name_FIELD,Last_Name_FIELD,Phone_FIELD,Email_FIELD];
    @api recordId;
    @api objectApiName;
}