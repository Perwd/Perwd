<template>
  <h1>搜索</h1>
  {{ $route.params.id }}
  {{ $route.params.num }}
  {{ $route.query.num }}

  <div>Store中的state、{{ $store.getters.formatInfo }}</div>

  <!-- {{ $store.getters.state.info }}
  {{ $store.getters.formatInfo }} -->
  <!-- {{ route.params.id }} -->
</template>
<script >
import { useStore } from "vuex";

export default {
  name: "Search",
  setup() {
    const store = useStore();

    console.log(store);
  },
};
</script>


