
console.log("Server started running")
Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    console.log(req.method, url.pathname);
    switch (url.pathname) {
      case '/':
        return new Response('Bun server running')
      case '/get':
        return Response.json({
          message: 'Hello World!'
        })
      case '/post':
        if (req.method === 'POST') {
          return Response.json({
            msg: "Post request received",
            data: await req.json()
          })
        }
        break;
      case '/postform':
        if (req.method === "POST") {
          const formData = await req.formData();
          return Response.json(JSON.stringify(formData));
        }
        break;
      default:
        return new Response('Invalid Url');
    }

    return new Response('Invalid Url');
  }
})