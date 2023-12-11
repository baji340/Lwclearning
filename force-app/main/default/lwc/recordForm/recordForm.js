import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordForm extends LightningElement {
    objectApiName=ACCOUNT_OBJECT;
    fields=[NAME_FIELD,PHONE_FIELD,REVENUE_FIELD];
    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Account has been created successfully !",
            message: "Account Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);

    }

}