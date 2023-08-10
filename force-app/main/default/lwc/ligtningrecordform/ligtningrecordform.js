import { LightningElement,api } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class Ligtningrecordform extends LightningElement {
    fields=[FIRST_NAME_FIELD,LAST_NAME_FIELD,PHONE_FIELD,EMAIL_FIELD];
    @api recordId;
    @api objectApiName;
}