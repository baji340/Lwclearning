import { LightningElement ,wire} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
import {deleteRecord} from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccList';
export default class DeleteAccounts extends LightningElement {
    accounts;
    error;
    @wire(getAccountList)
    wiredAccounts({data,error}){
        if(data){
            this.accounts=data;
            this.error=undefined;
        }else if(error){
            this.accounts=undefined;
            this.error=error;
        }
    }
    deleteAccount(event){
        const recordId = event.target.dataset.recordid;
        deleteRecord(recordId)
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title : 'Success',
                    message : 'Account Deleted',
                    variant : 'success'
                })
            );
                    return refreshApex(this.accounts);
                    })
                    .catch((error)=>{
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title : 'Error',
                                message : 'Error Deleting record',
                                variant : 'error'
                            })
                        );
                    });
                            
    }
}