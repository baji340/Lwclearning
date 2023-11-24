import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting='World';
    handleonchange(event){
        this.greeting=event.target.value;
    }
}