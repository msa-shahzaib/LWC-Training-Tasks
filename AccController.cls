public with sharing class AccController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [
            SELECT Id, Name, Phone, AnnualRevenue, Type
            FROM Account
            WITH USER_MODE
            LIMIT 200
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = searchKey + '%';
        return [
            SELECT Id, Name, Phone, AnnualRevenue, Type
            FROM Account
            WHERE Name LIKE :key
            WITH USER_MODE
            LIMIT 200
        ];
    }
}
