import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./tools";

async function main() {
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error("Weather MCP Server running on stdio");
}

main()
  .then(() => {
    console.log("Started MCP Weather Server");
  })
  .catch((err) => {
    console.error("Fatal error in main():", err);
  });
