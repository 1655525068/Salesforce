import { LightningElement } from 'lwc';
// import hello1 from "./hello1.html";
// import hello2 from "./hello2.html";

export default class TestConstructor extends LightningElement {
    name1;
    name2;
    name3;
    tp = 'test02'

    constructor(){
        super();
        this.name1 = 'call child constructor';
        console.log('call child constructor')
    }
    // 业务逻辑
    connectedCallback(){
        this.name2 = 'call child connectedCallback'
        console.log('call child connectedCallback')
    }

    // 收尾工作
    // render(){
    //     this.name3 = 'name3';

    //     console.log('call child render')
    //     if(this.tp === 'test01'){
    //         return hello1;
    //     }
    //         return hello2;
    // }

    renderedCallback(){
        console.log('call child renderedCallback');
    }

    disconnectedCallback(){
        console.log('call child disconnectedCallback')
    }
}