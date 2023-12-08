import { LightningElement } from 'lwc';

export default class LwcTable extends LightningElement {
    empname='';
    empdesignation='';
    handlechange(event){
        let name=event.target.name
        if(name==='Emp Name'){
            this.empname=event.target.value;
        }else if(name==='Emp desg'){
            this.empdesignation=event.target.value;
        }
    }
}