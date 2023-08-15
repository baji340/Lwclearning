public with sharing class ImperitiveCalss {
    @AuraEnabled(cacheable=true)
    public static list<Account> getimperitive(){
        return [select id,Name,Rating,Phone,Website,Type from Account limit 5];
    }
}