import getContact from '@salesforce/apex/ContactController.getContact';
import getContact1 from '@salesforce/apex/ContactController.getContact1';
import { LightningElement, wire } from 'lwc';

export default class TestWire extends LightningElement {
    data;
    data2;
    connectedCallback(){
        getContact().then(result =>{
            this.data2 = result;
        }).catch(error =>{
            console.log(error);
        }).finally(()=>{});

          // var fs = require('fs')

        // let p = new Promise((resolve,rejects)=>{
        // fs.readFile('input.txt',(err,data)=>{
        //     if(err){
        //         rejects(err);
        //     }else if(data){
        //        resolve(data);
        //     }
        // })
    }
    @wire(getContact)
    contacts;
    @wire(getContact1,{name:'Davis Josh'})
    contacts2({data,error}){
        if(data){
            this.data = data;
        }
        if(error){
            this.data = undefined;
        }
    }

}