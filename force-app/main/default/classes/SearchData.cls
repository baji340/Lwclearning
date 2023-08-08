public with sharing class SearchData {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(string searchkey){
        string seakey='%'+searchkey+'%';
        return [select Firstname,LastName,Email from Contact where Firstname like :seakey];
    }
}