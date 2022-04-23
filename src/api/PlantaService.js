import api from './api'

export const getPlantas = () => new Promise(
   (resolve, reject) => {
      api.get('/plantas')
         .then(response => resolve(response.data))
         .catch(error => reject(error))
   }
) 