import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "22063861-3c05c462599ae9ace4c5aa6eb",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};
const fetchPixabayImage = (query = "", page = 1) => {
  return axios
    .get("", {
      params: {
        q: query,
        page,
      },
    })
    .catch(function ({ error }) {
      if (error.response) {
        toast.error(error.response.data);
        toast.error(error.response.status);
        toast.error(error.response.headers);
      } else if (error.request) {
        toast.error(error.request);
      } else {
        toast.error("Error", error.message);
      }
      toast.error("Error", error.config);
      return console.log(error.config);
    });
};

fetchPixabayImage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchPixabayImage;
