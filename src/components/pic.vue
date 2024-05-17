<template>
  <div>
    <img class=" rounded-md" :src="req?.tracks[0]?.al?.picUrl" alt="" />
  </div>
</template>
<script setup lang="ts">
import { getSongListDetails } from "@/service";
import { useRequest } from "vue-request";
interface Props {
  picId: number;
}
const props = withDefaults(defineProps<Props>(), {
  picId: 4455,
});
console.log(props.picId);
const a = props.picId;
const { data: req } = useRequest(() => getSongListDetails({ id: a }), {});
console.log(req);
</script>