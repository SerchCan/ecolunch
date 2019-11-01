import {createPlugin} from 'fusion-core';
import axios from 'axios';
export default __NODE__ && createPlugin({
  middleware() {
    return async (ctx, next) => {
      if (ctx.method === 'GET' && ctx.path === '/tuppers/available') {
        const query = {
          where: { 
            id_status:1
          }
        }
        const { data } = await axios.get('http://localhost:4000/api/tuppers?filter',JSON.stringify(query));          
        ctx.body = {
          availableTuppersIds: data.map(({id_tupper})=>id_tupper)
        };
      }
      return next();
    };
  },
});