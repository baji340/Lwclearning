import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    aredetailsvisible=false;
    handleonchange(event){
        this.aredetailsvisible=event.target.checked;
    }
}