
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	goodsList : [],
}

const mutations = {
	addCart : function(state,item){ 
		var _item = state.goodsList.find(c=> c.goods_id===item.goods_id);
		if(_item){
			_item.num++;
		}else{
			state.goodsList.push(item);
			item.num=1;
		}
	}
}

const actions = {
	addGoods : function(context,item){
		context.commit('addCart',item)
	}
}

const getters = {
	getGoodsList : function(state){
		return state.goodsList;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})