import { api, LightningElement, track } from 'lwc';

export default class TestApi2 extends LightningElement {
    @api num2;
    @track numChild;
    handleChange(event){
        this.numChild = event.target.value;

        console.log(event.target.value)
    }
}