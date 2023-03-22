import { LightningElement } from 'lwc';
// import hello1 from "./hello1.html";
// import hello2 from "./hello2.html";

export default class TestConstructor1 extends LightningElement {
    name1;
    name2;
    name3;
    tp = 'test02'

    constructor(){
        super();
        this.name1 = 'call parent constructor';
        console.log('call parent constructor')
    }
    // 业务逻辑
    connectedCallback(){
        this.name2 = 'call parent connectedCallback'
        console.log('call parent connectedCallback')
    }

    // 收尾工作
    // render(){
    //     this.name3 = 'name3';

    //     console.log('call parent render')
    //     if(this.tp === 'test01'){
    //         return hello1;
    //     }
    //         return hello2;
    // }

    renderedCallback(){
        console.log('call parent renderedCallback');
    }

    disconnectedCallback(){
        console.log('call parent disconnectedCallback')
    }
}