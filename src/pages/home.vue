<script setup lang="ts">
import { ref } from 'vue';
import { apiGet } from '../composables/api';
import search from '../components/search.vue';
import info from '../components/information.vue';
import type { GitHubSearchResponse } from '../types/dataInterface';
import { useSpinerSearch } from '../stores/spinerSearch';

const spinerSearch = useSpinerSearch();
const { setSpinerTrue, setSpinerFalse } = spinerSearch;
const infoTable = ref<GitHubSearchResponse>()

const dataSearch = async (searchData: string) => {
    setSpinerTrue();
    await apiGet(searchData).then(res => {
        infoTable.value = res;
        console.log(res)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        setSpinerFalse();
    })
};


const fetchPageData = async (page: number) => {
  if (!infoTable.value) return;

  const query = 'vue'; 
  const perPage = 10; 
  const data = await apiGet(query, page, perPage); 
  if (data) {
    infoTable.value.items = data.items;
    infoTable.value.total_count = data.total_count;
  }
};

</script>

<template>
    <div class="m-4">
        <search class="mb-4" :data="(e: string) => dataSearch(e)" />
        <info :tableInformation="(infoTable)" :fetchPageData="fetchPageData"/>
    </div>
</template>