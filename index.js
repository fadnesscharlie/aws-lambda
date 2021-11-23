'use strict';

// dependicies
// let async1 = require('async');
let AWS = require('aws-sdk');
let util = require('util');

let s3 = new AWS.S3();

// setup our lambda handler
exports.handler = async (event, context, callback) => {
  // START HERE!! 
  console.log('Util', util.inspect(event, { depth: 5 }))

  try {
    const { ContentType, Metadata, Body} = await s3.getObject({
      Bucket: bucket,
      Key: 'images.json'
    }).promise();

    console.log(`S3 getObects: ContentType, ${ContentType}, Metadata, ${Metadata}, Body, ${Body}`);
    // getting body as a buffer, I know there is a method called Body.write(data, ?utf-8?) will this overwrite the file?
    let response = await Body.write('data here');
    console.log('RESPONSE', response);
    // create the metadata

    // reupload to s3
    s3.putObject({
      Bucket: bucket,
      Key: 'images.json',
      Body: response
    }, function (err) {
      if (err) console.error('EERRROORRR', err);
        else console.log('sucesss')
    })
  } catch (err) {
    console.log('Error here',err)
  }
}

// async1.waterfall([

  //   // download images.json
  //   function download(next){
  //     s3.getObject({
  //       Bucket: bucket,
  //       Key: 'images.json'
  //     },
  //     next)
  //   },

  //   // creates and appends data to image.json
  //   function appends(response, next) {
  //     console.log('response from appends function---',response)
  //   },

  //   // upload images.json to s3
  //   function upload(response, next) {

  //   }

  // ], function (err) {
  //   if (err) {
  //     console.error('EERRROORRR', err)
  //   } else {
  //     console.log('sucesss')
  //   }
  // });




  // -------------------------------------------------
  //   let bucket = event.Records[0].s3.bucket.name;

  //   let params = { Bucket: "lambbucket11", Key: "baked-goods.JPG", Body: "baked-goods.JPG"};
  //   s3.upload(params, function (err, data) {
  //     console.log('s3.upload', 'err', err, 'data', data)
  //   });

  //   let params2 = { Bucket: "lambbucket11", Key: "baked-goods.JPG" }
  //   s3.getObject(params2, function(err, data) {
  //     if (err) console.log(err, err.stack); 
  //     else console.log(data);         
  //   }); 



// exports.handler = function (event, context, callback) {
//   console.log('Eveeryting Under Event',JSON.stringify(event)); 
//   // START HERE!! 
//   // console.log('Util',util.inspect(event, { depth }))
//   console.log('content', JSON.stringify(context))
//   // console.log('callback', JSON.stringify(callback))
//   // run all functions that are dependent on the return from the function above
//   // async.waterfall();

//   let bucket = event.Records[0].s3.bucket.name;

//   // let a user upload an image of any size
//   let params = { Bucket: "lambbucket11", Key: "baked-goods.JPG", Body: "baked-goods.JPG"};
//   // let params = { Bucket: "lambbucket11", Key: uuid(), Body: image};
//   s3.upload(params, function (err, data) {
//     console.log('s3.upload', 'err', err, 'data', data)
//   });
//   // contentType: "JPG"

//   // get images.json
//   // let params2 = { Bucket: "lambbucket11", Key: "baked-goods.JPG" }
//   let params2 = { Bucket: "lambbucket11", Key: "baked-goods.JPG" }

//   s3.getObject(params2, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data);           // successful response
//   }); // get images.json

//   // let a user update:Create, Delete, rename? a dictionary, an array of images, of all images
//   // when uploaded -> dwnlod images.json(dictionary of images) -> array of objs(images), create array if none
//   // return meta data obj = image: name, Size, type, etc
//   // append new image to dictionary
//   // upload image.json to S3
// }

