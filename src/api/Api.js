import axios from 'axios';

const apiUrl = 'http://ms-dojo-mobile-pj.ms.qa';
let listner = null;
const getData = async () => {
  try {
    const result = await axios(`${apiUrl}/api/v1/home/guiabolso`, {
      method: 'get',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json',
      },
    });
    if (listner) {
      listner(result.data);
    }
  } catch (err) {
    console.warn(err);
  }
};

export default {
  update: callback => {
    listner = callback;
  },
  getData: getData,
  postData: async data => {
    try {
      const result = await axios.post(`${apiUrl}/api/v1/accounts`, data);
      getData();
      return result.data;
    } catch (err) {
      console.warn(err);
    }
  },
};

getData();
