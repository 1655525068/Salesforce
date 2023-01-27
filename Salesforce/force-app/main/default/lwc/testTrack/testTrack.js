import { LightningElement, track } from 'lwc';

export default class TestTrack extends LightningElement {

    @track myName;
    @track selectedValue;

    get categoryOptions() {
        return [
            {label :'New',value:'new'},
            {label :'Finished',value:'finished'}
        ];
    }

    changeName(event){
        this.myName = event.target.value;
    }

    handleCategoryChange(event){
        this.selectedValue = event.target.value;
    }

}