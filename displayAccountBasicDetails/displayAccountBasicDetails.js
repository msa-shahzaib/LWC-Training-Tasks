import { LightningElement, wire, track } from 'lwc';
import findAccounts from '@salesforce/apex/AccController.findAccounts';
import getAccountList from '@salesforce/apex/AccController.getAccountList';

const DELAY = 180;

export default class displayAccountBasicDetails extends LightningElement {
    searchKey = '';
    selectedAccount;
    @track isAccDetailsVisible = false;

    @wire(findAccounts, {searchKey: '$searchKey'}) searchedAccounts;
    @wire(getAccountList) accounts;

    handleCharacterChange(event) {
        this.isAccDetailsVisible = false;

        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

    handleSelect(event) {
        const accId = event.detail;
        this.selectedAccount = this.accounts.data.find(
            (account) => account.Id === accId
        );
        this.isAccDetailsVisible = true;
    }
}
