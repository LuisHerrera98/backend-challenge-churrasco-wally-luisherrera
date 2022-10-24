import app from '../src/app';
import request from 'supertest'
import { Application } from 'express';
import mongoose from 'mongoose'
import {options, url} from '../src/consts'

let server: Application | any;
let authToken: string;

beforeAll( async () => {
    await mongoose.disconnect();
    await mongoose.connect(url, options)
    .then((db) => db)
    .catch((err) => console.error(err));
})

afterAll( async()=>{
    await mongoose.disconnect()
    .then((db) => db)
    .catch((err) => console.error(err));
})

beforeEach(()=>{
    server = app.listen(3001)
})

afterEach(()=>{
    server.close()
})

describe("GET all users : api/auth/users", () => {
    test('should return an array of users, status code = 200', async () => {
        const response = await request(app).get('/api/auth/users').send();
        
        expect(response.headers['content-type']).toContain('json')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
     })
})

describe("POST login user : api/auth/users", () => {
    test('should return statusCode=200 and token of authorization in header response', async () => {
        const response = await request(app).post('/api/auth/login').send({
            email: "challenge@chrr.cc",
            password: "ch411enge"
        })
        authToken = response.headers['authorization']
        
        expect(response.statusCode).toEqual(200)
        expect(response.headers['authorization']).toEqual(expect.any(String))
    })

    test('should return code status 400 if the username, email or password is missing', async () => {
        const response = await request(app).post('/api/auth/login').send({
            email: "challenge@chrr.cc"
        })

        expect(response.statusCode).toEqual(400)
        expect(response.body).toEqual("\"password\" is required")
     })
})

describe('GET all products: api/product', () => {
    test('should return 200 with array of products', async () => {
        const response = await (await request(app).get('/api/product/').send().set('Authorization', authToken))
        
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
        expect(response.headers['content-type']).toContain('json')
        
    })

    test("should return access denied if you don't have the authorization token", async () => {
        const response = await (await request(app).get('/api/product/').send())

        expect(response.statusCode).toEqual(401)
        expect(response.headers['content-type']).toContain('json')
        expect(response.body).toEqual("Access Denied")
    })
})

describe('POST create product: api/product/create', () => {
    test('should return status code 200 when creating product with all required fields', async () => {
        const response = await request(app).post('/api/product/create').send({
            SKU: "challenge@chrr.cc",
            code: 2030,
            name: "lucho test",
            description: "test a la api",
            pictures: [
                "https://www.aweta.com/images/produces/overzicht/aweta-product-mango.png"
            ],
            price: 100,
            currency: "USD"
        }).set('Authorization', authToken)

        expect(response.statusCode).toEqual(200)
        expect(response.headers['content-type']).toContain('json')
    })

    test('should return status code 400 when creating product without required field SKU', async () => {
        const response = await request(app).post('/api/product/create').send({
            // SKU: "challenge@chrr.cc", WITHOUT CODE(REQUIRED)
            code: 2030,
            name: "lucho test",
            description: "test a la api",
            pictures: [
                "https://www.aweta.com/images/produces/overzicht/aweta-product-mango.png"
            ],
            price: 100,
            currency: "USD"
        }).set('Authorization', authToken)

        expect(response.statusCode).toEqual(400)
        expect(response.headers['content-type']).toContain('json')
        expect(response.body).toEqual("\"SKU\" is required")
    })

    test('should return status code 400 when creating product without required field name', async () => {
        const response = await request(app).post('/api/product/create').send({
            SKU: "challenge@chrr.cc",
            code: 2030,
            // name: "lucho test",  WITHOUT name(REQUIRED)
            description: "test a la api",
            pictures: [
                "https://www.aweta.com/images/produces/overzicht/aweta-product-mango.png"
            ],
            price: 100,
            currency: "USD"
        }).set('Authorization', authToken)

        expect(response.statusCode).toEqual(400)
        expect(response.headers['content-type']).toContain('json')
        expect(response.body).toEqual("\"name\" is required")
    })
})