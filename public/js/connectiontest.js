import ConnectionTestResource from "/services/connection-test-resource.js";

let conTestRe = new ConnectionTestResource;

// import { testPostCon } from "/connection-test-resource.js"

// const conTestRe = require("../../services/connection-test-resource");

window.testCon = async function testCon(){
    console.log(await conTestRe.testPostCon())
}