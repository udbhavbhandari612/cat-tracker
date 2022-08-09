# Cat Tracker

##### This is an application for basic CRUD using React.js + Node.js(Express)
# 
This CRM has the following functionality:

- It uses a data structure like this:
    
    ```jsx
    [
      {
        id: "50d85d70-b16c-47c8-b14c-81cbbc8b34d3",
        name: "Spot", // any string
        color: "white", // any string
        timeZone: "America/Los_Angeles" // must be a valid IANA time zone
      },
      {
        id: "4b2070ff-80b7-428d-bd1a-92afb5710dee",
        name: "Charles Cattington",
        color: "orange",
        timeZone: "Portugal"
      },
      {
        id: "7a8ee090-9e38-4f86-b1d7-91a23a05222a",
        name: "Icicle",
        color: "grey",
        timeZone: "Europe/Zurich"
      },
      {
        id: "437191e3-71f4-4e21-be8c-dbab03e7b282",
        name: "Wiffle",
        color: "calico",
        timeZone: "Pacific/Honolulu"
      }
    ]
    ```
    
- The data is stored on a server (backend). The data don’t have to last beyond the lifetime of the server.
- In the frontend, the cats are displayed with the information, as well as the current time in their time zone.
- A cat can be added, with name, color, and valid time zone. When a cat is added, it gets a randomly-generated UUID v4 as an `id`.
- A cat’s time zone (but not id, name, or color) can be edited and saved.
- A cat can be deleted.
- The server is always the source of truth. The frontend can be refreshed at any time and will display the current information from the server.
