import { LightningElement } from 'lwc';

export default class ChildCustomEvent extends LightningElement {
    btnHandler(event){
        this.dispatchEvent(new CustomEvent("uploadevent"));
    }
}