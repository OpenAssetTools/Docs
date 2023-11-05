<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: [String, null],
    default: "",
  },
  type: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <li>
    <em>{{ name }}</em>

    <template v-if="type"
      >&nbsp;<badge type="info">{{ type }}</badge>
    </template>

    <span v-if="description">&nbsp;{{ description }}</span>
  </li>
</template>
