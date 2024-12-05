//import latestArt from '/srv/site-scraper/latest-posts/latest-art.json'
//import latestVid from '/srv/site-scraper/latest-posts/latest-vid.json'
//import { read } from "$app/server"
import { readFileSync } from "node:fs"

export async function load({ }) {
    let latestArt, latestVid

    try {
        latestArt = JSON.parse(readFileSync('/srv/site-scraper/latest-posts/latest-art.json'))
        latestVid = JSON.parse(readFileSync('/srv/site-scraper/latest-posts/latest-vid.json'))
    } catch (e) {
        return { "error" : e.default }
    }
    

    //let latestArt = await fetch('https://goobie.xyz/latest-posts/latest-art.json').then(res => res.json())
    console.log(latestArt)
    //let latestVid = await fetch('https://goobie.xyz/latest-posts/latest-vid.json').then(res => res.json())

    return {
        "latestVid" : latestVid,
        "latestArt" : latestArt
    }
  }