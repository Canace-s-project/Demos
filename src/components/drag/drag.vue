<template>
  <draggable :handle="handle" class="drag-wrap" :class="slotClass" v-model="items" @change="updateItems">
    <div class="item" :class="{'can-drag':handle!=='.none'}" v-for="item in items" :key="item.id" @dragstart="dragstart" @dragend="dragend" @drop="drop">
      <slot name="item" :item="item"></slot>
    </div>
  </draggable>
</template>

<script>
/* eslint-disable no-plusplus */
import draggable from 'vuedraggable';

function items() {
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push({ name: `item${i}`, id: i });
  }
  return res;
}
export default {
  props: {
    newItems: {
      type: Array,
      default: () => {
        const res = items();
        return res;
      },
    },
    slotClass: Array,
    handle: {
      type: String,
      default: '.none',
    },
  },
  components: {
    draggable,
  },
  data() {
    return {
      items: this.newItems,
      isDrop: false,
      el: null,
    };
  },
  methods: {
    dragstart(e) {
      this.el = e.target;
      this.el.classList.add('select');
    },
    drop() {
      this.el.classList.add('move-in');
      setTimeout(() => {
        this.el.classList.remove('move-in');
      }, 600);
    },
    dragend() {
      this.el.classList.remove('select');
    },
    updateItems(val) {
      // console.log('val:', val);
      this.$emit('changeItems', this.items);
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-wrap {
  display: flex;
  flex-wrap: wrap;
  .item {
    text-align: center;
    width: 200px;
    line-height: 100px;
    color: #009cff;
    border: 2px solid transparent;
    margin: 10px;
  }
  .can-drag:hover {
    border: 2px dotted #009cff;
    cursor: move;
    .label {
      cursor: move;
    }
  }
  .select {
    background: #009cff;
    color: #fff;
  }
  .move-in {
    @extend .select;
    animation: scale-item ease-in-out 0.5s;
  }
}
@keyframes scale-item {
  from {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, 0);
  }
}
</style>
