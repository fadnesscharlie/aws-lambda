# aws-lambda

## Problem Domain

In our problem domain, we want to be able to get our image objects from AWS S3, and if there is nothing, create an empty array to push information into it. Then we want to be able to upload an image to this array that we created, or add to it. Then finally, upload with AWS S3 using our lambda function that triggers AWS S3 and AWS Bucket.

## Testing

With testing, we can push using github actions or upload a zip file so we can see our results, console logs, and most importantly, see if it passes our test provided. When we link it with Rekognition S3 Request we can check to see if our upload of our object array has worked or not even if there is not data inside of it.

## Buffering Issue

Today in class, we had an issue with the buffering. Trying to be able to get the buffering information, alter and add to it, then upload it. The problem we had faced is when we wanted to write to it, using `Body.write()` and then we had the problem of getting it to finish. For some reason, when it ran, it would give us the results, but would not continue on to the next function call in which we needed it to succeed.  Because of that small issue, we were not able to move on. Even when looking at the solution code, which was outdated and not meant for this new lab, we could not solve it using the demo he had.
