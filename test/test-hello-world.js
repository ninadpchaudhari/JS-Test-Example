var assert = require('assert');
var app = require("../index.js");
var request = require('supertest');


describe('Hello World API',()=>{
    describe("GET root", ()=>{
        it('should return HTTP OK!', (done)=>{
            request(app)
            .get("/")
            .expect(200)
            .end(function(err, res){
                done();
            });
            
        });
        it('should return Hello world', (done)=>{
            request(app)
            .get("/")
            .expect("Hello World!")
            .end((err, res)=>{
                done();
            });
        });
    });
});
