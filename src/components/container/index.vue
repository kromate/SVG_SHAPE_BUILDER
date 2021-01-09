<template>
  <tr>
    <th colspan="2">
      <h2 class="header">{{ visible }}</h2>
    </th>
    <td>
      <Eyes v-if="visible == 'eyes'" />
      <Faces v-if="visible == 'heads'" />
    </td>
  </tr>
</template>

<script>
import Eyes from "./Eyes";
import Faces from "./Faces";
export default {
  name: "Box",
  components: { Eyes, Faces },
  computed: {
    visible() {
      return this.$store.state.visiblePart;
    },
  },
};
</script>

<style></style>
