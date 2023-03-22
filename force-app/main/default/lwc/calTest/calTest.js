/* eslint-disable radix */
import { LightningElement, track } from 'lwc';

export default class CalTest extends LightningElement {
    num1 = 0;
    num2 = 0;
    @track sumparent;

    handleChange(event){
        if(event.target.name === 'num1'){
            this.num1 = event.target.value;
        }
        if(event.target.name === 'num2'){
            this.num2 = event.target.value;
        }
        this.sumparent = parseInt(this.num1) + parseInt(this.num2);

    }
}