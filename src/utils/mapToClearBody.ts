export default function mapToClearBody(x: any): any {
    if (x.city === null || x.estimated_population === null) return null;
    return { population: x.estimated_population, confirmed: x.confirmed, city: x.city };
}
