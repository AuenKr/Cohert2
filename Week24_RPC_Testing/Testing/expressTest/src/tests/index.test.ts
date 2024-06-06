import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import { app } from '..';

describe("Check server running status", () => {
    it("Server health status", async () => {
        const res = await request(app).get('/');
        expect(res.body).toStrictEqual({
            msg: "Health check point"
        });
        expect(res.status).toBe(200);
    })
})


describe("Main calculator logic tests", () => {
    describe("POST /sum with body", () => {
        it("Should fail for invalid inputs", async () => {
            const res = await request(app).post('/sum').send({
                a: "df",
                b: 1
            })
            expect(res.statusCode).toBe(404);
            expect(res.body).toStrictEqual({
                msg: "Invalid inputs"
            })
        })
        it("should fail for large input", async () => {
            const res = await request(app).post("/sum").send({
                a: 10000000,
                b: 2
            });
            expect(res.body).toStrictEqual({
                msg: "We don'nt support big number"
            });
            expect(res.statusCode).toBe(422);
        });
        it("should return the sum of two numbers", async () => {
            const res = await request(app).post("/sum").send({
                a: 1,
                b: 2
            });
            expect(res.body).toStrictEqual({
                answer: 3
            });
            expect(res.statusCode).toBe(200);
        });

        it("should return the sum of two negative numbers", async () => {
            const res = await request(app).post("/sum").send({
                a: -1,
                b: -2
            });
            expect(res.body).toStrictEqual({
                answer: -3
            });
            expect(res.statusCode).toBe(200);
        });

        it("should return the sum of two zero number", async () => {
            const res = await request(app).post("/sum").send({
                a: 0,
                b: 0
            });
            expect(res.body).toStrictEqual({
                answer: 0
            });
            expect(res.statusCode).toBe(200);
        });
    });

    describe('POST /multiply with header', () => {
        it('should retutrn multiply 1 and 3', async () => {
            const res = await request(app).post('/multiply').set({
                "a": "1",
                "b": "3"
            });
            expect(res.body).toStrictEqual({
                answer: 3
            });
            expect(res.statusCode).toBe(200);
        })
        it('should return multiply of -ve number', async () => {
            const res = await request(app).post('/multiply').set({
                "a": "-1",
                "b": "-3"
            });
            expect(res.body).toStrictEqual({
                answer: 3
            });
            expect(res.statusCode).toBe(200);
        })
    })

    describe('GET /sub with query', () => {
        it('should retutrn subtraction of 1 from 3', async () => {
            const res = await request(app).get('/sub').query({
                a: 1,
                b: 3
            })
            expect(res.body).toStrictEqual({
                answer: -2
            });
            expect(res.statusCode).toBe(200);
        })
        it('should return subtraction of -ve number ', async () => {
            const res = await request(app).get('/sub').query({
                a: -1,
                b: -3
            })
            expect(res.body).toStrictEqual({
                answer: 2
            });
            expect(res.statusCode).toBe(200);
        })
    })

    describe('GET /square with params', () => {
        it('should retutrn square of 3', async () => {
            const res = await request(app).get('/square/' + 3)
            expect(res.body).toStrictEqual({
                answer: 9
            });
            expect(res.statusCode).toBe(200);
        })
        it('should return square of -ve number ', async () => {
            const res = await request(app).get('/square/' + -3)
            expect(res.body).toStrictEqual({
                answer: 9
            });
            expect(res.statusCode).toBe(200);
        })
    })
})

