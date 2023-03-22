public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContact(){
        return [SELECT Id, Name from Contact ORDER BY Name LIMIT 10];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContact1(String name){
        return [SELECT Id, Name from Contact WHERE Name =: name];
    }

}