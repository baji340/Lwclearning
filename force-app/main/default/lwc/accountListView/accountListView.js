import { LightningElement,track, wire } from 'lwc';
import fetchAccountRecord from '@salesforce/apex/accountListView.fetchAccountRecord';
const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Website', fieldName: 'Website', type: 'url' }
];
export default class AccountListView extends LightningElement {
    @track rowOffset = 0;
    @track tableLoadingState = false;
    @track accounts;
    @track err;
    @track offset=0;
    @track Prevoffset=0;
    limit = 7;

    @wire(fetchAccountRecord,{offset: '$offset', l : '$limit' }) wiredAccounts({ error, data }) {
        this.tableLoadingState = false;
        if(data){
            this.accounts=data;
            this.err=undefined;
            if(this.accounts.length==0)
                this.offset=this.Prevoffset;
        }else{
            this.err=error;
            this.accounts=undefined;
        }
    }
    handlePrev (_event) {
        //window.clearTimeout(this.delayTimeout);        
        if(this.offset - this.limit >=0)
        {
            this.tableLoadingState = true;
            this.Prevoffset=this.offset;
            this.offset = this.offset - this.limit;
        }
    }

    handleNext (_event) {
        //window.clearTimeout(this.delayTimeout);
        this.tableLoadingState = true;
        this.Prevoffset=this.offset;
        this.offset = this.offset + this.limit;
    }

    
}