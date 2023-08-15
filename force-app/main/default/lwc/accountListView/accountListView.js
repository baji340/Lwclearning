import { LightningElement,track, wire } from 'lwc';
import fetchAccountRecord from '@salesforce/apex/accountListView.fetchAccountRecord';
export default class AccountListView extends LightningElement {
    @track rowOffset = 0;
    @track tableLoadingState = false;
    @track accounts;
    @track err;
    @track offset=0;
    @track Prevoffset=0;
    limit = 7;
    @track columns = [{
        label: 'Account name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        sortable: true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'url',
        sortable: true
    },
    {
        label: 'Rating',
        fieldName: 'Rating',
        type: 'test',
        sortable: true
    }
];
    @wire(fetchAccountRecord,{offset: '$offset', l : '$limit' }) wiredAccounts({ error, data }) {
        this.tableLoadingState = false;
        if(data){
            this.accounts=data;
            console.log('Data'+JSON.stringify(this.accounts));
            this.err=undefined;
            if(this.accounts.length==0)
                this.offset=this.Prevoffset;
        }else{
            this.err=error;
            this.accounts=undefined;
        }
    }
    handlePrev (event) {
        //window.clearTimeout(this.delayTimeout);        
        if(this.offset - this.limit >=0)
        {
            this.tableLoadingState = true;
            this.Prevoffset=this.offset;
            this.offset = this.offset - this.limit;
        }
    }

    handleNext (event) {
        //window.clearTimeout(this.delayTimeout);
        this.tableLoadingState = true;
        this.Prevoffset=this.offset;
        this.offset = this.offset + this.limit;
    }

    
}