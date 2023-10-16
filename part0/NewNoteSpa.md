# A diagram depicting a browser's interaction with a server when a single page app submits a form

```mermaid
sequenceDiagram
  participant browser
  participant server

  Note right of browser: submit event triggers callback from browser and the payload is sent to the browser

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: Responds with status code 201 created

  Note right of browser: browser executes javascript to rerender the page with the latest added note
```
