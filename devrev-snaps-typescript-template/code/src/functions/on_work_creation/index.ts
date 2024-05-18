import { client, publicSDK } from "@devrev/typescript-sdk";

export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  })
  console.log("HELLO WORLD");
  }

export const run = async (events: any[]) => {
 
  for (let event of events) {
    await handleEvent(event);
  }
};

export default run;