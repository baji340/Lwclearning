import { LightningElement ,api} from 'lwc';

export default class OneWayBinding extends LightningElement {
    @api firstname="hello";
    handlechange(event){
        this.firstname=event.target.value;
        console.log('firstname :'+this.firstname);
    }
}