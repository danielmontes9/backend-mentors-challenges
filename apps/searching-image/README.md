
# Searching Image

This project is part of one monorepo with other projects developed in Nestjs. It has been created to connect with **Unsplash API** to show different images. In addition I added security with dependencies like **Helmet** to protect every request in the header, and **Throttler** to limit the number of request per minute.


## Tech Stack

Made with: **NestJs 10.0.0**



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`UNSPLASH_ACCESS_KEY`

`UNSPLASH_SECRET_KEY`

`UNSPLASH_URL`


## API Reference


#### Get hello

```http
  GET /search-image/hello
```


#### Get a list

```http
  GET /search-image/list
```


#### Get a random photo

```http
  GET /search-image/random
```


#### Get a photo by id

```http
  GET /search-image/random/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get a photo stadistics

```http
  GET /search-image/${id}/stadistics
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Download a photo by id

```http
  GET /search-image/${id}/download
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Author

- [@danielmontes9](https://github.com/danielmontes9)

