class BandSiteApi {
  constructor(key) {
    this.key = key;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async getComments() {
    const getInfo = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.key}`
    );
    return getInfo.data;
  }

  async getShows() {
    const getInfo = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.key}`
    );
    return getInfo.data;
  }

  async postComment(name, comment) {
    try {
      const getInfo = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.key}`,
        {name, comment}
      );
      return getInfo.data;
    } catch (error) {

      console.log("error is here");
      console.error(error);
    }
  }

  async deleteComment(commentId) {
    try {
        const delPostResponse = await axios.delete(
            `${this.baseUrl}/comments/${commentId}?=&api_key=${this.key}`
        );
        console.log("Comment deleted successfully:", delPostResponse);
        return delPostResponse;
    } catch (err) {
        console.error('Error deleting comment:', err);
    }
}
}



