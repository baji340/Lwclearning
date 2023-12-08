import { LightningElement,wire } from 'lwc';
import fetchAccountTable from '@salesforce/apex/AccountController.fetchAccountRecord';
const columns=[
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Website', fieldName: 'Website', type: 'url' }
];
export default class AccountListView extends LightningElement {
    accounts;
    columns=columns;
    tableLoadingState=false;
    Prevoffset=0;
    offset=0;
    rowOffset=0;
    error;
    limit=2;
    @wire(fetchAccountTable, { offset: '$offset', l : '$limit' }) 
    wiredAccounts({ error, data }) {
        this.tableLoadingState = false;
        if(data){
            this.accounts = data;
            this.error = undefined;
            if(this.accounts.length == 0)
                this.offset= this.Prevoffset;
        }else if(error){
            this.error=error;
            this.accounts=undefined;
        }

    }
    handlePrev(event){
        if(this.offset - this.limit >=0)
        {
            this.tableLoadingState = true;
            this.Prevoffset=this.offset;
            this.offset = this.offset - this.limit;
        }

    }
    handleNext(event){
        this.tableLoadingState = true;
        this.Prevoffset=this.offset;
        this.offset = this.offset + this.limit;

    }

}