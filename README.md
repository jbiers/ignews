stripe - payment management

faunaDB - database good for serverless. WHY?

"serverless" - what is it?

prismic CMS - content management system

github oauth - can't register users because app lacks backend (why?)

- single-page application versus server side rendering (LOTS OF CONTENT: products, texts)

- NEXT JS runs in a node server. It does not replace a full-blown backend server, as it is a server with the unique purpose of rendering a layout.

- NextJS works with routes. How does pure react work with routes?

- _app works as a route manager, and will generate the page asked by the user. It reruns every time a user loads a new page.

- in NextJS, all images should live in the public folder. You can import them without giving the full path as source

- center text vertically: by setting line height to the same size of height.

- css ::after adds an element after the content, before the HTML tag closes

- react icons plugin

- one-sided auto margins

- API calls using the state + useEffect technique we've learned, only happen at a browser level. That means, the page will be rendered first and then the call will happen, causing a design shift and making items invisible to bots and crawlers. Calls can (and in this case, should, happen in the server)

- SSR with nextJS by using getServerSideProps

- Intl API: internationalization API, provides NumberFormat and DateTimeFormat, for dealing natively with currencies, percentages and dates

- Static Site Generation with getStaticProps

- When to use Client Side API calls, Server Side or Static Site Generation

-next-auth for authentication with several providers