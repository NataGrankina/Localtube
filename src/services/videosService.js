import { API_KEY } from 'config';

function transformServerResponse({ data }) {
  const { items } = data;

  return items.map((item) => {
    const {
      id: { videoId: id },
      snippet: {
        description,
        title,
        publishedAt,
        thumbnails: { default: thumbnail }
      }
    } = item;
    return {
      id,
      title,
      description,
      publishedAt,
      thumbnail
    };
  });
}

export default client => ({
  loadVideosByLocation: (ltd, lng, radius) =>
    client
      .get('/search', {
        params: {
          part: 'snippet',
          location: `${ltd},${lng}`,
          locationRadius: `${radius}km`,
          order: 'date',
          type: 'video',
          key: API_KEY
        }
      })
      .then(transformServerResponse)
});
