<script setup lang="ts">
  import { useTransformersTable } from '@/composables/useTransformersTable';
  import ResetButton from './ui/ResetButton.vue';

  const {
    search,
    regionFilter,
    healthFilter,
    regionOptions,
    healthOptions,
    filteredTransformers,
    resetState,
  } = useTransformersTable();

  const headers = [
    { title: 'Name', key: 'name', sortable: false },
    { title: 'Region', key: 'region', sortable: false },
    { title: 'Health', key: 'health', sortable: false },
  ];

  function getHealthColor(health: string) {
    switch (health.toLowerCase()) {
      case 'critical':
        return '#e53935';
      case 'poor':
        return '#fb8c00';
      case 'fair':
        return '#fdd835';
      case 'good':
        return '#1e88e5';
      case 'excellent':
        return '#2e7d32';
      default:
        return 'grey';
    }
  }
</script>

<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card>
    <v-card-title>
      Transformers Information
      <v-spacer></v-spacer>
      <v-row dense>
        <v-col cols="4">
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            clearable
            density="compact"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="regionFilter"
            :items="regionOptions"
            label="Filter by Region"
            clearable
            density="compact"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="healthFilter"
            :items="healthOptions"
            label="Filter by Health"
            clearable
            density="compact"
          />
        </v-col>
        <v-col
          cols="2"
          class="d-flex justify-end"
        >
          <ResetButton
            tooltip="Reset Table State"
            @on-reset="resetState"
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="filteredTransformers"
      :search="search"
      class="elevation-1"
    >
      <template #item.health="{ value }">
        <v-chip
          :color="getHealthColor(value)"
          text-color="white"
          small
        >
          {{ value }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
  .v-card {
    margin-bottom: 1rem;
  }
</style>
