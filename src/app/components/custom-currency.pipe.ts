import { Pipe, PipeTransform } from "@angular/core";
import { formatCurrency, getCurrencySymbol } from "@angular/common";

@Pipe({
  name: "customCurrency"
})
export class CustomCurrencyPipe implements PipeTransform {
  currencyCode = "CLP";
  locale = "es-CL";

  transform(value: number, digitsInfo?: string): string | null {
    return formatCurrency(
      value,
      this.locale,
      getCurrencySymbol(this.locale, "narrow"),
      this.currencyCode,
      digitsInfo
    );
  }
}
