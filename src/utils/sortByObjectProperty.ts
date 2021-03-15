export default function sortByObjectProperty(array: any[], property: string): void {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j][property].isLessThan(array[j + 1][property])) {
                const aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
