# Creating an Axum Web Server that Echoes User Input

*Date: May 4, 2024*

<br>

## Introduction

Today, I started learning how to create a web server using Axum, a web framework for Rust. My goal is to build a simple server that echoes user input in a string.

<br>

## Setup

<br>

1. **Install Rust and Cargo**: Ensure Rust and Cargo are installed and updated.
```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup update
```

<br>

2. **Create a new Rust project**:
```sh
cargo new axum_echo_server
cd axum_echo_server
```

<br>


3. **Add dependencies**:
    Update `Cargo.toml`:
```toml
[dependencies]
axum = "0.5"
tokio = { version = "1", features = ["full"] }
hyper = { version = "0.14", features = ["full"] }
```

<br>

## Building the Web Server

<br>

1. **Create the main server file**:
    Update `src/main.rs`:
```rust
use axum::{
    routing::{get, post},
    Router, Json, extract::Query,
    http::StatusCode,
};
use serde::Deserialize;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // Build our application with a single route
    let app = Router::new()
        .route("/", get(root))
        .route("/echo", post(echo));

    // Run it with hyper on localhost:3000
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

// Handler that will respond to GET requests
async fn root() -> &'static str {
    "Send a POST request to /echo with a JSON body containing a 'message' field to see it echoed back."
}

// Handler that will respond to POST requests and echo the input
async fn echo(Json(payload): Json<EchoRequest>) -> (StatusCode, Json<EchoResponse>) {
    (StatusCode::OK, Json(EchoResponse { message: payload.message }))
}

// Define the structure of the request
#[derive(Deserialize)]
struct EchoRequest {
    message: String,
}

// Define the structure of the response
#[derive(serde::Serialize)]
struct EchoResponse {
    message: String,
}
```

<br>

2. **Run the server**:
```sh
cargo run
```

<br>

## Testing the Server

<br>

1. **Root Endpoint**:
    Open your browser or use curl to send a GET request to the root endpoint:
```sh
curl http://localhost:3000/
```

<br>

Expected response:
```
Send a POST request to /echo with a JSON body containing a 'message' field to see it echoed back.
```

<br>

2. **Echo Endpoint**:
    Send a POST request to the `/echo` endpoint with a JSON payload:
```sh
curl -X POST http://localhost:3000/echo -H "Content-Type: application/json" -d '{"message": "Hello, world!"}'
```

<br>

Expected response:
```json
{
    "message": "Hello, world!"
}
```

<br>

Today, I successfully built a simple Axum web server that listens for user input and echoes it back. This exercise helped me understand the basics of Axum and how to set up routes, handlers, and work with JSON payloads.

*Robeck*