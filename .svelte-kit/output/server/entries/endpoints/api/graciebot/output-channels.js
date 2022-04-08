import fs from "fs";
import os from "os";
async function get() {
  channels = fs.readFile(`${os.homedir()}/graciebot`);
  let response = await fetch("channels.json");
  return {
    status: response.status,
    body: response.ok && await response.json()
  };
}
export { get };
