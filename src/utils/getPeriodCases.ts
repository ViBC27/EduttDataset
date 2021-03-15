import { BigNumber } from 'bignumber.js';

export default function getPeriodCases(endDateContents: any[], startDateContents: any[]): any[] {
    const periodCases: any[] = [];
    endDateContents.forEach(endDateCase => {
        if (endDateCase !== null) {
            const startDateCase = startDateContents.find(x => x !== null && x.city === endDateCase.city);
            const confirmed = endDateCase.confirmed - startDateCase.confirmed;
            const confirmedStartDate = startDateCase.confirmed;
            const confirmedEndDate = endDateCase.confirmed;
            const { city, population } = endDateCase;
            const rate = new BigNumber((confirmed / population) * 100).decimalPlaces(5);
            periodCases.push({ city, population, rate, confirmed, confirmedEndDate, confirmedStartDate });
        }
    });
    return periodCases;
}
