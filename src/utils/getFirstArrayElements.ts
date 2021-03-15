export default function getFirstArrayElements(array: any[], numberOfElements: number): any[] {
    const elements: any[] = [];
    for (let i = 0; i < numberOfElements; i++) {
        elements.push(array[i]);
    }
    return elements;
}
