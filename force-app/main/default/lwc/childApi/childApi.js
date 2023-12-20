import { LightningElement, api } from 'lwc';

export default class ChildApi extends LightningElement {
    timestamp=new Date();
    @api
    refresh(){
        this.timestamp=new Date();
    }
}