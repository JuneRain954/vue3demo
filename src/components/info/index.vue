<template>
  <div class='info-component'>
    <p class="title" v-if="isShowTitle">{{ props.title }}</p>
    <section class="item-container">
      <span class="desc">{{ props.desc }}：</span>
      <ul class="item-list" @click="onSelect">
        <li
          v-for="(item, idx) in props.list"
          :key="item.id"
          :data-idx="idx"
          :data-val="item.value"
          :class="['item', {'active': activeIndex === idx }]">
          {{ item.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang='ts' setup name="Info">
import { computed, ref } from 'vue';

interface WithDataset {
  dataset: {
    idx: string | number;
    val: string | number;
  };
}

interface InfoItem {
  id: string | number;
  name: string;
  value: string | number;
}

const props = defineProps({
  val: {
    type: [Number, String],
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  list: {
    type: Array<InfoItem>,
    default: () => [],
  }
});

const emit = defineEmits<{
  (event: "update:val", value: number | string): void
}>();

const isShowTitle = computed(() => props.title);
  
const activeIndex = ref(0);

const onSelect = (e: MouseEvent) => {
  const { idx, val } = (e.target as unknown as WithDataset)?.dataset ?? {};
  idx && (activeIndex.value = +idx);
  idx && emit("update:val", val);
}

</script>

<style lang='scss' scoped>
.info-component{
  color: #bbb;
  margin-bottom: 20px;
  .title{
    padding: 20px 0;
    color: #000;
    font-weight: bold;
  }
  .item-container{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .desc{
      white-space: nowrap;
    }
    .item-list{
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      .item{
        cursor: pointer;
        &.active{
          color: #42a5f5;
        }
        &:hover{
          color: #42a5f5;
        }
      }
    }
  }
}
</style>
