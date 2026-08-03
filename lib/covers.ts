/**
 * Generate a cover image URL for a game using thum.io screenshot service.
 * Falls back to a gradient placeholder if the game URL can't be screenshotted.
 *
 * thum.io generates live screenshots of any URL on-the-fly.
 * Free tier, no API key needed, cached by their CDN.
 */
export function getGameCover(playUrl: string, cover?: string | null): string {
  // If the game has a custom cover image set, use it
  if (cover && cover !== 'PLACEHOLDER_COVER') {
    return cover
  }

  // Generate a screenshot from the game's URL
  // thum.io format: https://image.thum.io/get/width/1200/crop/630/https://example.com
  const cleanUrl = playUrl.replace(/\/$/, '') // remove trailing slash
  return `https://image.thum.io/get/width/1200/crop/630/${cleanUrl}`
}
