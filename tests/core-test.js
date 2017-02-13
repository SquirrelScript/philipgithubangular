
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = require('chai').expect;
var supertest= require('supertest');
var api = supertest('http://localhost:8080');
var assert = require('assert');

describe('Array', function() {
  it('should return a page', function(done){
    api.get('/')
    .expect(200,done);
  });
});
