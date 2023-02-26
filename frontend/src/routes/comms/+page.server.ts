import apiFetch from '$lib/apiFetch.ts'
import convertDate from '$lib/convert-date.js'

export async function load() {
  //get commissions status
  let commsStatus = await apiFetch('commissions-status')
  let openSlots : Number = commsStatus.attributes.open_slots
  let openDate : String = convertDate(commsStatus.attributes.open_date)
  let open : Boolean = commsStatus.attributes.open

  return {
    openSlots,
    openDate,
    open,
  }
}