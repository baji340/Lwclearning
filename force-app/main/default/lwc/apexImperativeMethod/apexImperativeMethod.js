import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
const columns=[
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Website', fieldName: 'Website', type: 'url' }
];
export default class ApexImperativeMethod extends LightningElement {
    columns=columns;
    accounts;
    error;
    /*connectedCallback(){ 
        getAccountList()
            .then(result=>{
                this.accounts=result;
            })
            .catch(error=>{
                this.error=error;
            });
    }*/
    async handleLoad(){
        try{
            this.accounts= await getAccountList();
            this.error=undefined;
        }
        catch{
            this.error=error;
            this.accounts=undefined;
        }

    }
}