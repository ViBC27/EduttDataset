import app from '@Source/app';
import request from 'supertest';

const urlBase = '/api?state=AL&startDate=2021-01-01&endDate=2021-02-01';

describe('Opinion Test', () => {
    it('whenGetApi', async done => {
        const response = await request(app).get(urlBase);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveLength(10);
        done();
    });
});
