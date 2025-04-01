import { ref, computed, onMounted } from 'vue';
import data from '@/assets/sampledata.json';
import { formatIntl } from '@/plugins/dateFormater';
import type ApexCharts from 'apexcharts';

const STORAGE_KEY = 'transformersChartState';

export function useTransformerChart() {
  const transformers = ref(data);
  const selectedTransformers = ref(transformers.value.map((t) => t.name));
  const visibilityState = ref<Record<string, boolean>>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  );
  const chartRef = ref<{ chart: ApexCharts } | null>(null);

  const chartSeries = computed(() => {
    return transformers.value
      .filter((t) => selectedTransformers.value.includes(t.name))
      .map((t) => ({
        name: t.name,
        data: t.lastTenVoltgageReadings.map((r) => r.voltage),
      }));
  });

  const chartOptions = computed(() => ({
    chart: {
      id: 'voltage-chart',
      toolbar: { show: false },
      autoHeight: true,
      events: {
        legendClick: (
          chartContext: Record<string, any>,
          seriesIndex: number
        ) => {
          const seriesNames = chartContext?.w?.globals?.seriesNames;
          if (seriesNames) {
            const seriesName = seriesNames[seriesIndex];
            visibilityState.value[seriesName] =
              !visibilityState.value[seriesName];
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(visibilityState.value)
            );
          }
        },
      },
    },
    xaxis: {
      categories: transformers.value[0].lastTenVoltgageReadings.map(
        (r) => r.timestamp
      ),
      labels: {
        formatter: (value: string) => formatIntl(value),
      },
    },
  }));

  onMounted(() => {
    setTimeout(() => {
      const chart = chartRef.value?.chart;
      if (chart) {
        Object.entries(visibilityState.value).forEach(([name, isHidden]) => {
          if (isHidden) {
            chart.hideSeries(name);
          }
        });
      }
    }, 100);
  });

  function resetState() {
    visibilityState.value = {};
    localStorage.removeItem(STORAGE_KEY);

    const chart = chartRef.value?.chart;
    if (chart) {
      transformers.value.forEach((t) => {
        chart.showSeries(t.name);
      });
    }

    selectedTransformers.value = transformers.value.map((t) => t.name);
  }

  return {
    chartRef,
    chartOptions,
    chartSeries,
    selectedTransformers,
    resetState,
  };
}
