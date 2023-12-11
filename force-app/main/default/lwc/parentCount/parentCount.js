import { LightningElement } from 'lwc';

export default class ParentCount extends LightningElement {
    count=1;
    handleoncount(event){
        this.count=this.count + 1;
    }
}