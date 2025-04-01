import { ref, watch, onMounted, computed } from 'vue';
import data from '@/assets/sampledata.json';
import type { Transformer } from '@/models/Transformer.ts';

const STORAGE_KEY = 'transformersTableState';

export function useTransformersTable() {
  const transformers = ref<Transformer[]>(data);

  const search = ref('');
  const regionFilter = ref('');
  const healthFilter = ref('');

  const regionOptions = [...new Set(transformers.value.map((t) => t.region))];
  const healthOptions = [...new Set(transformers.value.map((t) => t.health))];

  const filteredTransformers = computed(() => {
    return transformers.value.filter((item) => {
      const matchesRegion = regionFilter.value
        ? item.region === regionFilter.value
        : true;
      const matchesHealth = healthFilter.value
        ? item.health === healthFilter.value
        : true;
      return matchesRegion && matchesHealth;
    });
  });

  function saveState() {
    const state = {
      search: search.value,
      regionFilter: regionFilter.value,
      healthFilter: healthFilter.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      search.value = parsed.search || '';
      regionFilter.value = parsed.regionFilter || '';
      healthFilter.value = parsed.healthFilter || '';
    }
  }

  function resetState() {
    search.value = '';
    regionFilter.value = '';
    healthFilter.value = '';
    localStorage.removeItem(STORAGE_KEY);
  }

  watch([search, regionFilter, healthFilter], saveState);
  onMounted(loadState);

  return {
    search,
    regionFilter,
    healthFilter,
    regionOptions,
    healthOptions,
    filteredTransformers,
    resetState,
  };
}
