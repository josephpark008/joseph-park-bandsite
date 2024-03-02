class BandSiteApi {
  constructor(key) {
    this.key = key;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
  }

  async getComments() {
    const getInfo = await axios.get(`${this.baseUrl}/comments?api_key=<${this.key}>`);
    return getInfo.data;
  }

  async getShows() {
    const getInfo = await axios.get(`${this.baseUrl}/showdates?api_key=<${this.key}>`);
    return getInfo.data;
  }

  async postComment() {
    const postInfo = await axios.post(`${this.baseUrl}/showdates?api_key=<${this.key}>`);
    return postInfo.data;
  }
}

