


function Services(){
    const user_array = [
        {
          _id: "60b6c0f59f1b2c3d9c3b4e82",
          username: "johndoe",
          email: "johndoe@example.com",
          password: "$2b$10$E9nPUL5Z2GHx8ZDIEErSeO/5KTpBq6/sdswRtC1TzQUvKZ8G/GKiS",
          createdAt: new Date("2024-06-11T10:00:00Z"),
          profile: {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            address: {
              street: "123 Main St",
              city: "Anytown",
              state: "CA",
              zip: "12345"
            }
          },
          preferences: {
            language: "en",
            timezone: "America/Los_Angeles"
          }
        },
        {
          _id: "60b6c0f59f1b2c3d9c3b4e83",
          username: "janedoe",
          email: "janedoe@example.com",
          password: "$2b$10$ABCDEFLKJDIOJ3K5H9QUvKZ8G/9BDFJGL9S",  // another hashed password
          createdAt: new Date("2024-06-12T10:00:00Z"),
          profile: {
            firstName: "Jane",
            lastName: "Doe",
            age: 28,
            address: {
              street: "456 Elm St",
              city: "Anytown",
              state: "CA",
              zip: "12345"
            }
          },
          preferences: {
            language: "en",
            timezone: "America/Los_Angeles"
          }
        },
        {
          _id: "60b6c0f59f1b2c3d9c3b4e84",
          username: "bobjones",
          email: "bobjones@example.com",
          password: "$2b$10$LKJDIOJ3K5H9QUvKZ8G/9BDFJGL9SABCDEFL",  // another hashed password
          createdAt: new Date("2024-06-13T10:00:00Z"),
          profile: {
            firstName: "Bob",
            lastName: "Jones",
            age: 35,
            address: {
              street: "789 Pine St",
              city: "Anytown",
              state: "CA",
              zip: "12345"
            }
          },
          preferences: {
            language: "en",
            timezone: "America/New_York"
          }
        },
        {
          _id: "60b6c0f59f1b2c3d9c3b4e85",
          username: "alicewong",
          email: "alicewong@example.com",
          password: "$2b$10$9BDFJGL9SABCDEFLKJDIOJ3K5H9QUvKZ8G/9",  // another hashed password
          createdAt: new Date("2024-06-14T10:00:00Z"),
          profile: {
            firstName: "Alice",
            lastName: "Wong",
            age: 27,
            address: {
              street: "101 Maple St",
              city: "Anytown",
              state: "CA",
              zip: "12345"
            }
          },
          preferences: {
            language: "zh",
            timezone: "Asia/Shanghai"
          }
        },
        {
          _id: "60b6c0f59f1b2c3d9c3b4e86",
          username: "charlieb",
          email: "charlieb@example.com",
          password: "$2b$10$ABCDEFLKJDIOJ3K5H9QUvKZ8G/9BDFJGL9S",  // another hashed password
          createdAt: new Date("2024-06-15T10:00:00Z"),
          profile: {
            firstName: "Charlie",
            lastName: "Brown",
            age: 32,
            address: {
              street: "202 Birch St",
              city: "Anytown",
              state: "CA",
              zip: "12345"
            }
          },
          preferences: {
            language: "en",
            timezone: "America/Chicago"
          }
        }
      ];
      
      console.log(users);
}

export default Services