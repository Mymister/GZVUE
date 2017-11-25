import storage from '../js/storage.js';

export default{
    state:{
        goodsBuyData:storage.get('goodsBuyData')
    },
    getters:{
        getBuyTotal(state){
            return Object.values(state.goodsBuyData).reduce((sum,v) => sum + v,0);
        }
    },
    mutations:{
        upBuyData(state,params){
            state.goodsBuyData[params.id]=params.total;
            storage.set('goodsBuyData',state.goodsBuyData);
        }
    }
}