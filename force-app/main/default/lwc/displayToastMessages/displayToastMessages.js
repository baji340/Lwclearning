import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class DisplayToastMessages extends LightningElement {
    showError() {
        console.log('###Click');
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'error'
        });
        this.dispatchEvent(evt);
    }
    showWarning(){
        console.log('###Click');
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'Warning'
        });
        this.dispatchEvent(evt);

    }
    showSuccess(){
        console.log('###Click');
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'Success'
        });
        this.dispatchEvent(evt);

    }
    showInfo(){
        console.log('###Click');
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'Info'
        });
        this.dispatchEvent(evt);

    }
}