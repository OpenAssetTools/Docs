<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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

    <span>&nbsp;{{ description }}</span>
  </li>
</template>

<style module>
badge {
  margin-left: 2px;
}

span {
  margin-left: 2px;
}
</style>
<!-- - _{{ name }}_ <badge v-if="type">{{type}}</badge> {{ description }} -->
