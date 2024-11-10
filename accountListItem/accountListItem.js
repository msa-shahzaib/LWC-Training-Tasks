import { LightningElement, api } from 'lwc';

export default class accountListItem extends LightningElement {
    @api account;

    handleClick(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('select', { detail: this.account.Id });
        this.dispatchEvent(selectEvent);
    }
}
