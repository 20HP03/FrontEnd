import { Pipe, PipeTransform } from '@angular/core';
import { ConfirmationToken } from '@stripe/stripe-js';
import { ShippingAddress } from '../models/order';

@Pipe({
  standalone: true,
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value?: ConfirmationToken['shipping'] | ShippingAddress, ...args: unknown[]): unknown {
    if (value && 'address' in value && value.name) {
      const { line1, line2, city, country, state, postal_code } =
        (value as ConfirmationToken['shipping'])?.address!;
      return `${value.name}, ${line1}${line2 ? ', ' + line2 : ''}, 
        ${city}, ${state}, ${country}, ${postal_code}`;
    } else if (value && 'line1' in value) {
      const { line1, line2, city, country, state, postalCode } =
        value as ShippingAddress
      return `${value.name}, ${line1}${line2 ? ', ' + line2 : ''}, 
        ${city}, ${state}, ${country}, ${postalCode}`;
    } else {
      return 'Unknown Address!'
    }
  }

}
