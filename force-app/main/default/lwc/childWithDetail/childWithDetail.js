import { LightningElement } from 'lwc';

export default class ChildWithDetail extends LightningElement {
    btnHandler(event){
        var Fname="baji";
        var Lname="syed";    
        var selectedEvent=new CustomEvent('uploadevent', { detail:        
            {Fname : Fname, Lname : Lname}});
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}