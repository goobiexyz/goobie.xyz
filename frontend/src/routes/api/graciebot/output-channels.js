import fs from 'fs'
import os from 'os'

export async function get() {
  channels = fs.readFile(`${os.homedir()}/graciebot`) // not finished dsjkfghlsuerh
  let response = await fetch('channels.json')

  return {
    status: response.status,
    body: response.ok && (await response.json())
  }
}
