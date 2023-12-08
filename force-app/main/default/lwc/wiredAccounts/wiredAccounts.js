import { LightningElement, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';
const columns=[
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Website', fieldName: 'Website', type: 'url' }
];
export default class WiredAccounts extends LightningElement {
    columns=columns;
    accounts;
    error;
    @wire(fetchAccounts)
    wiredAccounts({data,error}){
        if(data){
            this.accounts=data;
            this.error=undefined;
        }else if(error){
            this.error=error;
            this.accounts=undefined;
        }
    }
}