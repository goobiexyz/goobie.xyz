import latestArt from '/srv/site-scraper/latest-posts/latest-art.json'
import latestVid from '/srv/site-scraper/latest-posts/latest-vid.json'

export async function load({ }) {
    return {
        "latestVid" : latestVid,
        "latestArt" : latestArt
    }
  }