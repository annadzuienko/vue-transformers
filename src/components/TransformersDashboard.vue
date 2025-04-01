<template>
  <div class="p-2">
    <h1 class="text-2xl mb-4">Transformers Dashboard</h1>
    <v-row dense>
      <v-col
        cols="12"
        md="6"
        class="pr-4 my-2"
      >
        <TransformerTable />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="my-2"
      >
        <VoltageChart />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import TransformerTable from './TransformersTable.vue';
  import VoltageChart from './VoltageChart.vue';
</script>
