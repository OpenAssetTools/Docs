<script setup>
import { computed } from 'vue';
import { selectedGame } from '@theme/components/preferences'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: [Array, String, null],
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  usage: {
    type: [String, null],
    default: null
  }
});

const shouldShow = computed(() => {
  if (!props.game) {
    return true;
  }

  if (props.game instanceof Array) {
    return props.game.indexOf(selectedGame.value) >= 0;
  }

  return props.game === selectedGame.value;
});

const usageString = computed(() => props.usage ? `${props.name} ${props.usage}` : props.name);
</script>

<style>
.VPBadge.required:before {
  content: "Required"
}
</style>

<template v-if="shouldShow">

## {{ name }} <badge v-if="required" class="required" type="tip"/>

Usage: `{{ usageString }}`

<slot />

</template>
