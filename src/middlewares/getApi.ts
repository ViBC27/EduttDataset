import getFirstArrayElements from '../utils/getFirstArrayElements';
import sortByObjectProperty from '../utils/sortByObjectProperty';
import sendResponseToEdutt from '../utils/sendResponseToEdutt';
import mapToClearBody from '../utils/mapToClearBody';
import getPeriodCases from '../utils/getPeriodCases';
import { Request, Response } from 'express';
import got from 'got';

const baseApi = 'https://api.brasil.io/dataset/covid19/caso/data/?';
const headers = { Authorization: `token ${process.env.TOKEN}` };

async function getApi(request: Request, response: Response) {
    try {
        const { state, startDate, endDate } = request.query;
        const endDateResponse = await got(`${baseApi}state=${state}&date=${endDate}`, { headers });
        const startDateResponse = await got(`${baseApi}state=${state}&date=${startDate}`, { headers });
        const endDateContents = JSON.parse(endDateResponse.body).results.map(mapToClearBody);
        const startDateContents = JSON.parse(startDateResponse.body).results.map(mapToClearBody);
        const periodCases = getPeriodCases(endDateContents, startDateContents);
        sortByObjectProperty(periodCases, 'rate');
        const firstTenCities = getFirstArrayElements(periodCases, 10);
        sendResponseToEdutt(firstTenCities);
        return response.send(firstTenCities);
    } catch (error) {
        return response.send({ error: error.message });
    }
}

export default getApi;
