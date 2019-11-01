import {createPlugin} from 'fusion-core';

export default createPlugin({
  middleware() {
    return (ctx, next) => {
      if (ctx.method === 'GET' && ctx.path === '/tuppers/available') {
        ctx.body = {
            availableTuppersIds: [1,2,3,4,6,7,8,9,10]
        };
      }
      return next();
    };
  },
});