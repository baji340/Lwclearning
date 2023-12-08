import { LightningElement } from 'lwc';

export default class LwcInputsmulti extends LightningElement {
    name='';
    age;
    handleClick(event){
        var inp=this.template.querySelectorAll("lightning-input");
        inp.forEach(function(element){
            if(element.name==="input1")
                this.name=element.value;
            else if(element.name==="input2")
                this.age=element.value;
        },this);
    }
}