import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "22063861-3c05c462599ae9ace4c5aa6eb",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};
const fetchPixabayImage = (currentPage, query) => {
  return axios
    .get("", {
      params: {
        q: query,
        page: currentPage,
      },
    })
    .then((response) => response.data.hits);
};

// const KEY = "22063861-3c05c462599ae9ace4c5aa6eb";

// const fetchData = async ({
//   searchQuery = "",
//   currentPage = 1,
//   pageSize = 12,
//   q: query,
//   page,
// }) => {
//   return await axios
//     .get(
//       `${baseURL}?q=${params.q}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
//     )
//     .then((response) => response.data.hits);
// };

// export default fetchData;

// fetchPixabayImage.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
// };

// export default fetchPixabayImage;
// ========================================================================

// const KEY = "22063861-3c05c462599ae9ace4c5aa6eb";
// const BASE_URL = "https://pixabay.com/api/";

// const fetchPixabayImage = ({ searchQuery = "", page = 1 }) => {
//   return fetch(
//     `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((response) => response.data.hits);
// };

fetchPixabayImage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchPixabayImage;
