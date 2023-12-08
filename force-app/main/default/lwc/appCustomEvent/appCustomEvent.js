import { LightningElement } from 'lwc';

export default class AppCustomEvent extends LightningElement {
    Fname='';
    Lname='';
    handleUpload(event){
        this.Fname=event.detail.Fname;
        this.Lname=event.detail.Lname;
        console.log('Fname'+event.detail.Fname);
        console.log('Lname'+event.detail.Lname);
    }
}