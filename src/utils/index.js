export const VIDEO_RATING_TYPES = {
  LIKE: 'like',
  DISLIKE: 'dislike',
  NONE: 'none'
};

export function getViewVideoLink(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}
