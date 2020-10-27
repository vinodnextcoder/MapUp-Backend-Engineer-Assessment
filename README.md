# Securing RESTful APIs with header API-Key

## Create a simple Express-NodeJS API /intersections with the requirements given below.

* This is a mapping based exercise and so requires integration of turfjs https://turfjs.org/docs/
* It should be a POST request, protected with a header based auth check
* The API takes a really long linestring with (5k points) in GeoJSON in the body.

# API end point
- http://localhost:3000/api/auth/mapUserTest
## for auth add this key in api headers
-{ Authorization:zNXT3yFA}
## for api sample payload or req.body in json format
-{ "line1":[[126, -11], [129, -21]], "line2":[[123, -18], [131, -14]] }
