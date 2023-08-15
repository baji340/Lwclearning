import { LightningElement, track } from 'lwc';
import getimperitive from '@salesforce/apex/ImperitiveCalss.getimperitive';
export default class ImperativeLwc extends LightningElement {
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
@track data;
@track error;
connectedCallback(){
    getimperitive()
        .then(result=>{
            this.data=result;
            this.error=undefined
        })
        .catch(error=>{
            this.error=error;
            this.data=undefined;
        })
}

}