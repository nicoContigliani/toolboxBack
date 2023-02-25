const supertest = require("supertest");
const expect = require('chai').expect;
const assert = require('assert');
const {get,getId} = require("../Apiservices/folder/fileDao");

describe("fileDao get", function () {
    describe("get object", function () {
      it("should return object", function () {
        const result = get();
        result.should.be.a('object');
      });
    });
  });