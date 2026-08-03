/**
 * Get the cover image for a game.
 * Uses the local cover path directly. Falls back to placeholder.
 */
export function getGameCover(playUrl: string, cover?: string | null): string {
  if (cover && cover !== 'PLACEHOLDER_COVER') {
    return cover
  }
  return '/games/placeholder.jpg'
}
