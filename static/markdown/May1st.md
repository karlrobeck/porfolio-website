# **Labor Day / Back to coding**

*Date: May 1, 2024*

<br>

Happy Labor day y'all. im back on coding and im currently working on my `maya` software development kit in rust language. the purpose of the system is for me to provide a `sdk` that can be easily coded by developer's where trying to interact with `maya` for payment transactions. if you want to read the full api documentation of `maya` that im currently reading feel free to click this [link](https://developers.maya.ph/).

Anyways, another reason why im trying to create this sdk is to learn about design pattern.

![Builder pattern in wikipedia](https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg)

**Image reference at** *`https://upload.wikimedia.org/wikipedia/commons/8/87/W3sDesign_Builder_Design_Pattern_UML.jpg`*

it's a basic diagram of builder pattern. its a part of design system specifically on creational pattern. it's suited for the sdk because for this specificic reason. i'll give a proper example of my rust implementation using the builder pattern.

<br>

```rust
// lets create a connection 
let client = MayaClient::new();

// let's create a checkout for a banana.
let checkout = MayaCheckout::builder()
    .add_total_amount({
        // let's build the price and the currency for the banana
        TotalAmount::builder()
            .add_value(20) // let's set the price to 20 pesos
            .add_currency("PHP") // let's make sure that this is pesos
    })
    .build(); // let's now build it for us to send it to the maya

// let's send it to maya
let response = client.send(checkout);

```

in this demonstration, we created a client that will interact with the `maya` system for handling transaction. but in order to properly use it we need to provide proper implementation of maya's payment method called `checkout`. the response can be use to redirect the user to the `maya` payment portal.

![example of maya checkout](https://files.readme.io/f4a6bdb-Screen_Shot_2022-05-12_at_1.41.13_PM.png)

**Image reference at** *`https://files.readme.io/f4a6bdb-Screen_Shot_2022-05-12_at_1.41.13_PM.png`*

Same results will apply if we try to implement our self created code to maya. we will see our `20 pesos banana` that we can buy from the merchant.

Reason for this implementation is because of AppCon. if you read the last blog, i am the lead backend developer for the EROG application. part of my job is to implement payment system for the customers. my paymaya implementation is quite messy and hard to understand because i dont have a design pattern and for that project i use `Python programming language`. i created this sdk for me to better utilize and create a robust solution that will last as long as maya will not change the api. it's also easy to use and understand compared to my old implementation.

Here is my `Python` implementation and let's recreate the `20 pesos banana` that we will by from the merchant.

```python
def main():
    # lets create a connection to the maya client
    async with AsyncClient(
        base_url="https://pg-sandbox.paymaya.com" # lets define the maya domain.
    ) as client:
        response = await client.post(
            "/checkout/v1/check"
            json={
                "totalAmount":{
                    "value":"20" # let's set the price to 20 pesos
                    "currency":"PHP" # let's make sure this is pesos PHP
                },
                "requestReferenceNumber":"12312480-123" # let's provide a random number
            }
        )
```

in this old code that i have. its super messy and hard to read and scale because if a letter mismatch happen. the system and connection will fail. in the rust example. under the hood this is the implementation that i'm using but in a composable and maintainable manner so that i dont have to go back and forth in the maya documentation just to have a `maintainble` code. i have a quote right now that fit's this description

> Less code, less bug and to worry about
> - *Robeck*
