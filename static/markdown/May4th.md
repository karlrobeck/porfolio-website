# Studying PostgreSQL with Rust using SQLx

*Date: May 4, 2024*

<br>

## Introduction

Today, I began my journey of integrating PostgreSQL with Rust using the SQLx library. SQLx is a powerful, async, pure Rust SQL crate that supports compile-time checked queries without a DSL.

I want to learn SQL,Rust and PostgreSQL at the same time because in the thesis that i will work on i want to use rust all the way from UI design to database management. because there is this saying

> Can we built it in rust?
> - *Probably someone on the internet.*

<br>

## Setup

Let's first install the required dependencies in order to work with POSTGRESQL

<br>

1. **Install Rust and Cargo**: Ensure Rust and Cargo are installed and updated.
    ```sh
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    rustup update
    ```

<br>

2. **Create a new Rust project**:
    ```sh
    cargo new rust_sqlx_project
    cd rust_sqlx_project
    ```

<br>

3. **Add SQLx and PostgreSQL dependencies**:
    Update `Cargo.toml`:
```toml
[dependencies]
sqlx = { version = "0.5", features = ["runtime-tokio-native-tls", "postgres"] }
tokio = { version = "1", features = ["full"] }
dotenv = "0.15"
```

<br>

4. **Set up environment variables**:
    Create a `.env` file:
```env
DATABASE_URL=postgres://user:password@localhost/database_name
```

<br>

5. **Install and configure PostgreSQL**:
    Ensure PostgreSQL is installed and running. Create a database and a user with appropriate permissions.

<br>

## Initial Connection

<br>

1. **Load environment variables**:
    Update `main.rs`:
```rust
use sqlx::postgres::PgPoolOptions;
use dotenv::dotenv;
use std::env;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;

    println!("Connected to the database!");

    Ok(())
}
```

<br>

2. **Run the project**:
```sh
cargo run
```

<br>

## Basic CRUD Operations

1. **Create a table**:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);
```

<br>

2. **Insert data**:
    Update `main.rs`:
```rust
async fn create_user(pool: &sqlx::PgPool, name: &str, email: &str) -> Result<(), sqlx::Error> {
    sqlx::query("INSERT INTO users (name, email) VALUES ($1, $2)")
        .bind(name)
        .bind(email)
        .execute(pool)
        .await?;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;

    create_user(&pool, "John Doe", "john.doe@example.com").await?;

    println!("User created!");

    Ok(())
}
```

<br>

3. **Query data**:
    Update `main.rs`:
```rust
async fn get_users(pool: &sqlx::PgPool) -> Result<(), sqlx::Error> {
    let users = sqlx::query!("SELECT id, name, email FROM users")
        .fetch_all(pool)
        .await?;

    for user in users {
        println!("ID: {}, Name: {}, Email: {}", user.id, user.name, user.email);
    }
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;

    create_user(&pool, "John Doe", "john.doe@example.com").await?;
    get_users(&pool).await?;

    println!("Users retrieved!");

    Ok(())
}
```

<br>

I set up a Rust project with SQLx and PostgreSQL, established a database connection, and performed basic CRUD operations. This foundation will allow me to build more complex database interactions in future sessions. and it also sharpens my mind when building complex application because i now have a baseline on what to create and how to do it properly.

*Robeck*