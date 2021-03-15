import got from 'got';

export default function sendResponseToEdutt(array: any[]): void {
    array.forEach(async (x, i) => {
        const headers = { MeuNome: 'Vitor Barcelos de Cerqueira' };
        const json = { id: i, nomeCidade: x.city, percentualDeCasos: x.rate };
        const urlBase = 'https://us-central1-lms-nuvem-mestra.cloudfunctions.net/testApi';
        const response = await got.post(urlBase, { json, headers });
        console.log(response.body);
    });
}
