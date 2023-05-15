# Workspaces REST API

## Requirements

You will need install `Node.js`, `npm` and `MongoDB` in your environement.

## Running the project

    Rename .env.locale to .env and set the environment variables // MongoDV connection string

    $ npm start

## Making requests

### `By default, the API_HOST is http://localhost:3005`

#### Create a new worksapce

request url `API_HOST/api/v1/workspaces`

request method `POST`

request body
`{`
name: `{String}`, (required)
slug: `{String}`, (required)
`}`

#### Get all workspaces

request url `API_HOST/api/v1/workspaces`

request method `GET`

##### The following filter is allowed

search: `{searchString}`,
userId: `{userId}`

#### Update a workspace

request url `API_HOST/api/v1/workspaces/:worksapceId`
request method `PUT`
request body
`{`
name: `{String}`, (required)
slug: `{String}`, (required)
`}`

#### Delete the workspace

request url `API_HOST/api/v1/workspaces/:worksapceId`
request method `DELETE`

### Check slug availability

request url `API_HOST/api/v1/workspaces/check-slug`

request method `POST`

request body
`{`
slug: `{String}`, (required)
`}`

#### Create a new user (register)

request url `API_HOST/api/v1/user/register`

request method `POST`

request body
`{`
email: `{String}` (required)
password: `{String}` (required)
fullName: `{String}` (required)
`}`

#### Sign in

request url `API_HOST/api/v1/user/login`

request method `POST`

request body
`{`
email: `{String}` (required)
password: `{String}` (required)
`}`
