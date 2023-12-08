import { LightningElement } from 'lwc';

export default class LWCInputs extends LightningElement {
    name='';
    firstname='';
    handleclick(event){
        var inpt=this.template.querySelector("lightning-input");
        this.name=inpt.value;
    }
    handlechange(event){
        this.firstname=event.target.value;
    }
}