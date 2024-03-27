<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VkButton'
})
</script> -->
<script lang="ts" setup>
import { ref } from 'vue'
import type { ButtonProps } from './type'

defineOptions({
  name: 'VkButton'
})
withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})

// const emits = defineEmits(['click'])
// const clickIt = () => {
//   emits('click', 66666)
// }
</script>

<style>
.vk-button {
  /* --main-bg-color: #fff; */
  /* background-color: var(--main-bg-color); */
}
</style>
