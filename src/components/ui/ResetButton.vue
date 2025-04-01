<template>
  <v-tooltip
    :text="tooltip"
    location="top"
  >
    <template #activator="{ props: slotProps }">
      <v-btn
        v-bind="slotProps"
        icon="mdi-restore"
        size="x-small"
        variant="outlined"
        color="secondary"
        @click="emits('onReset')"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    tooltip: {
      type: String,
      required: false,
      default: 'Reset state',
    },
  });
  const emits = defineEmits(['onReset']);
</script>
