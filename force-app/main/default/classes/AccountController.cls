public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountRecord(Integer offset, Integer l){
        return [Select Id, Name, Website, Type from Account limit :l  offset :offset ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        return [select Id,Name,Type,Website from Account];
    }
    @AuraEnabled
    public static List<Account> getAccountList(){
        return [select Id,Name,Type,Website from Account];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        return [select Id,Name,Type,Website from Account];
    }

}