public with sharing class accountListView {

    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountRecord(Integer offset, Integer l){
        return [Select Id, Name, Website,Rating,Phone, Type from Account limit :l  offset :offset ];
    }
 }