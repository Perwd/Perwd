<template>
  <!-- 三级联动全局组件，所以不用引入 -->
  <TypeNav />
  <ListContainer />
  <Recommend />
  <Rank />
  <Like />
  <Floor />
  <Floor />
  <Brand />
  num:{{ $store.state.num }} count:{{ count }} <br />{{
    $store.getters.doubles
  }}
  <!-- <button @click="add()">加一</button> -->
  <button @click="$store.state.count++">翻倍</button>
</template>

<script >
import ListContainer from "@/page/Home/ListContainer/ListContainer";
import Recommend from "@/page/Home/Recommend/index";
import Rank from "@/page/Home/Rank/index";
import Like from "@/page/Home/Like/index";
import Floor from "@/page/Home/Floor/index";
import Brand from "@/page/Home/Brand/index";

import { computed } from "vue";
import { mapState, useStore, dispatch } from "vuex";
// components: {
//   ListContainer;
// }
export default {
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.count),
    };
  },
};
</script>

<style>
</style>