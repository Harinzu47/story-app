import ApiEndpoint from "../config/ApiEndpoint";
import instance from "../config/ApiInstance";

const Stories = {
  async getAllStories() {
    return await instance("application/json")({
      method: "get",
      url: ApiEndpoint.GET_ALL_STORIES,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  async addNewStory({ description, photo }) {
    return await instance("multipart/form-data")({
      method: "post",
      url: ApiEndpoint.ADD_NEW_STORY,
      data: {
        description: description,
        photo: photo,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default Stories;
