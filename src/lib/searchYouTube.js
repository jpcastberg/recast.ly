import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: callback,
    error: function (error) {
      error.errors.forEach((error) => console.error(error));
    }
  });
};

export default searchYouTube;

// {
//   maxResults: 5,
//   part: 'snippet',
//   q: options.q,
//   type: ''
// }

//vvvSUCCESFUL AJAX REQUEST!!!!!!!!!vvv

// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/search',
//   type: 'GET',
//   data: {
//     key: 'AIzaSyCAUGy8yCIUiON6UDukLTCxMAlFwoXkGSA',
//     maxResults: 5,
//     part: 'snippet',
//     q: 'abc',
//     type: ''
//   },
//   contentType: 'application/json',
//   success: function(data) {
//     console.log(data);
//   },
//   error: function (error) {
//     console.log(error);
//   }
// });
