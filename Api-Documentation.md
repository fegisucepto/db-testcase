## Endpoints

List of Available Endpoints:

- `GET /transactions`
- `POST /transactions`
- `DELETE /transactions/:id`
- `GET /customers`
- `POST /customers`
- `DELETE /customers/:id`

### GET /transactions

#### Description

- Get all the Transactions data

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "id": 11,
        "menu": "Bimbingan",
        "price": 11,
        "customer_id": 1,
        "qty": 21,
        "payment": "11111111111111111111212",
        "total": 11,
        "created_at": "2023-04-02T17:00:00.000Z"
      },
      {
        "id": 12,
        "menu": "Bimbingan",
        "price": 11,
        "customer_id": 7,
        "qty": 21,
        "payment": "11111111111111111111212",
        "total": 11,
        "created_at": "2023-04-02T17:00:00.000Z"
      }
    ]
  }
  ```

### POST /transactions

#### Description

- Create a new transactions data

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "id": INTEGER,
    "menu": STRING,
    "price": INTEGER,
    "customer_id": INTEGER,
    "qty": INTEGER,
    "payment": INTEGER,
    "total": INTEGER,
    "created_at": DATE
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "statusCode": 201,
    "message": "transactions created successfully",
    "data": {
      "id": 12,
      "menu": "Bimbingan",
      "price": 11,
      "customer_id": 7,
      "qty": 21,
      "payment": "11111111111111111111212",
      "total": 11,
      "created_at": "2023-04-02T17:00:00.000Z"
    }
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### GET /transactions/:id

#### Description

- transactions data by Id

#### Response

_201 - Ok_

- Body
  ```json
  {
    "statusCode": 201,
    "data": {
       "id": 12,
      "menu": "Bimbingan",
      "price": 11,
      "customer_id": 7,
      "qty": 21,
      "payment": "11111111111111111111212",
      "total": 11,
      "created_at": "2023-04-02T17:00:00.000Z"
    }
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### DELETE /transactions/:id

#### Description

- Remove a transactions data based on given id

#### Response

_200 - OK_

- Body
  `json { "statusCode": 200, "message": "transactions {id} deleted successfully" } `
  _404 - Not Found_
- Body
  ```json
  {
    "statusCode": 404,
    "error": {
      "message": "News not found"
    }
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```
