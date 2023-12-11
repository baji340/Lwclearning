import { LightningElement } from 'lwc';

export default class ChildCount extends LightningElement {
    handleOnClick(event){
        this.dispatchEvent(new CustomEvent("increasecount"));
    }
}