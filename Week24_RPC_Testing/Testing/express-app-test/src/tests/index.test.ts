import { describe, expect, test, it } from '@jest/globals';
import request from "supertest";
import { app } from "../index"

describe("Health route check", () => {
    it("Check health of server", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual({
            msg: "Health check point"
        })
    })
})

describe("Main calculator logic tests", () => {

    describe("POST /sum with body", () => {
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
