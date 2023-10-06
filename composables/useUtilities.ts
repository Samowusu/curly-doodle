import { v4 as uuidv4 } from 'uuid'

export default () => {
  function generateRandomToken () {
    return uuidv4()
  }

  function getNextTwentyFourHours () {
    const now = new Date()
    const nextTwentyFourHours = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    return nextTwentyFourHours
  }

  function extractTokenFromInviteLink (inviteLink : string) {
    try {
      const url = new URL(inviteLink)
      const pathname = url.pathname

      // Extract the token part from the pathname
      const token = pathname.substring(pathname.lastIndexOf('/') + 1)

      return token
    } catch (error) {
      console.error('Error extracting token from invite link:', error)
      return null
    }
  }

  return { generateRandomToken, getNextTwentyFourHours, extractTokenFromInviteLink }
}
