<script setup lang="ts">
  import { useTransformerChart } from '@/composables/useTransformerChart';
  import ResetButton from './ui/ResetButton.vue';

  const { chartRef, chartOptions, chartSeries, resetState } =
    useTransformerChart();
</script>

<template>
  <v-card>
    <v-card-title>
      <v-row debse>
        <v-col cols="10"> Voltage Readings </v-col>
        <v-col
          cols="2"
          class="d-flex justify-end"
        >
          <ResetButton
            tooltip="Reset Chart State"
            @on-reset="resetState"
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <apexchart
        ref="chartRef"
        type="line"
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<style scoped>
  .v-card {
    margin-bottom: 1rem;
  }
</style>
