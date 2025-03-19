import iziToast from 'izitoast';

const fetchParams = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '49425225-4fab9228e9772b9206d5850f9',
  IMAGE_TYPE: 'photo',
  ORIENTATION: 'horizontal',
  SEFESEARCH: true,
  
}

const { BASE_URL, API_KEY, IMAGE_TYPE, ORIENTATION, SEFESEARCH } = fetchParams

function fetchImages (value) {
  if (!value) {
      iziToast.error({
        title: 'Error',
        message: "Please enter a valid search query!",
      });

      return Promise.resolve([]);
  }

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${value}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SEFESEARCH}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error data: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: "Sorry, there are no images matching your search query. Please try again!",
        });

        return [];
      }

      return data.hits;
    })
    .catch(error => {
      iziToast.error({
      title: 'Error',
      message: "Something went wrong. Please try again!",
      })

      console.log(error);
    })
  }

export default fetchImages;
