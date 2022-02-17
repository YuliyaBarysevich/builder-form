const useAxios = (list) => {
  const builderAPI = 'https://barysevich-server-api.herokuapp.com/api/v1/partners';

  const addNewData = async (item, callback) => {
    const bodyFormData = new FormData();
    for(const i in item) {
      bodyFormData.append(i, item[i]);
    }

    try {
      const newData = await useAxios.post(builderAPI, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      callback(newData.data);
    } catch(error) {
      callback({
        error: true,
        data: { error_msg: error.response.data.response }
      });
    }
  }
  return [addNewData]
};

export default useAxios;