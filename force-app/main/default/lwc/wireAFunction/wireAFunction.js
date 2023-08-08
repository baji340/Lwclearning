import { LightningElement,wire } from 'lwc';
import findContacts from '@salesforce/apex/SearchData.findContacts';
export default class WireAFunction extends LightningElement {
    searchtxt;
    searchon(event){
        this.searchtxt=event.target.value;
    }
    @wire(findContacts,{searchkey:'$searchtxt'})wiredcontacts;

}