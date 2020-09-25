import { CLICKS_FILENAME } from "./constants"

export const saveClicks = async (userSession, isPublic) => {
  console.log("saveClicks")
  const clicks = 'click'
  await userSession.putFile(CLICKS_FILENAME, JSON.stringify({ clicks, isPublic }), {
    encrypt: !isPublic,
    dangerouslyIgnoreEtag: true
  })
}

export const fetchClicks = async(userSession, username) => {
  const clicksJson = await userSession.getFile(CLICKS_FILENAME, {
    decrypt: false,
    username: username || undefined
  })

  if (clicksJson) {
    const json = JSON.parse(clicksJson)
    if (json.isPublic) {
      return {
        clicks: json.clicks,
        public: true
      }
    }
  }


}
