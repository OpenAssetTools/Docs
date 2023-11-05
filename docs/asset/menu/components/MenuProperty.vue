<script setup>
import slugify from "slugify";
import { computed } from "vue";
import { selectedGame } from "@theme/components/preferences";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: [Array, String, null],
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  usage: {
    type: [String, null],
    default: null,
  },
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

const gameClasses = computed(() => {
  if (!props.game) {
    return "";
  }

  if (props.game instanceof Array) {
    return ["game-only", ...props.game];
  }

  return ["game-only", props.game];
});

const slug = computed(() => slugify(props.name));

const usageString = computed(() =>
  props.usage ? `${props.name} ${props.usage}` : props.name
);
</script>

<style>
.VPBadge.required:before {
  content: "Required";
}
</style>

<template>
  <div :class="gameClasses">
    <!-- We need to generate the entirety of the header ourselves due to -->
    <!-- https://github.com/vuejs/vitepress/issues/3133 -->
    <!-- Also do not make it a h2 element if hidden so it does not appear in toc -->
    <component :is="shouldShow ? 'h2' : 'span'" :id="slug">
      {{ name }}
      <badge v-if="required" class="required" type="tip" />
      <a
        class="header-anchor"
        :href="`#${slug}`"
        :aria-label="`Permalink to ${name}`"
        >&ZeroWidthSpace;</a
      >
    </component>

    <span>Usage:&nbsp;</span>
    <code>{{ usageString }}</code>

    <slot />
  </div>
</template>
