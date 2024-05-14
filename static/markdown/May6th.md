# Learning Go: Building a Basic Net/HTTP Web Server

*Date: May 6 2024*

Welcome to my journey of learning Go, also known as Golang. As a developer with experience in various programming languages, I decided to explore Go due to its growing popularity, efficiency, and simplicity for backend development. In this post, I’ll walk you through my experience setting up a basic web server using Go’s `net/http` package.

The first step was to install Go on my machine. The process is straightforward:

-  Download the installer from the [official Go website](https://golang.org/dl/).
-  Follow the installation instructions for your operating system.

After installation, verify it by running:

```sh
go version
```

Go encourages a specific project structure. I created a directory for my project and set up the Go workspace:

```sh
mkdir go-web-server
cd go-web-server
go mod init go-web-server
```

I started by writing a simple web server. The Go `net/http` package makes it easy to create a basic HTTP server.

1. **Create a file named `main.go`:**

    ```go
    package main

    import (
        "fmt"
        "net/http"
    )

    func helloHandler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    }

    func main() {
        http.HandleFunc("/", helloHandler)
        fmt.Println("Server is listening on port 8080...")
        if err := http.ListenAndServe(":8080", nil); err != nil {
            fmt.Println("Error starting server:", err)
        }
    }
    ```

- **Importing Packages:** The `fmt` and `net/http` packages are essential for input/output operations and creating the HTTP server, respectively.
- **Handler Function:** `helloHandler` is a simple function that writes "Hello, World!" to the HTTP response.
- **Setting Up Routes:** `http.HandleFunc("/", helloHandler)` registers the `helloHandler` function to handle requests to the root URL ("/").
- **Starting the Server:** `http.ListenAndServe(":8080", nil)` starts the server on port 8080.

To run the server, I executed:

```sh
go run main.go
```

Once the server started, I opened a web browser and navigated to `http://localhost:8080/`. As expected, the message "Hello, World!" was displayed.


Setting up a basic web server in Go was a great introduction to the language. The syntax is clean and the standard library is powerful. I’m excited to delve deeper into Go and explore more advanced features and libraries.

*Robeck*