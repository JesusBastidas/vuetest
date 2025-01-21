<script setup lang="ts">
import { ref } from 'vue'
import { useSpinerSearch } from '../stores/spinerSearch';
import { useSearchHistory } from '../stores/searchHistory';

const spinerSearch = useSpinerSearch();
const searchHistory = useSearchHistory();

const props = defineProps (
    {
        data: {
            type: Function,
            default: () => {}
        }
    }
);

const searchData = ref<string>('');
const showDropdown = ref<boolean>(false);

const searchExecute = async (e: Event, terminoConsulta: string, select?: boolean) => {
    e.preventDefault();
    const cleanedTerm = terminoConsulta.trim();
    if (!cleanedTerm) return;
    if (select) searchData.value = cleanedTerm;
    showDropdown.value = false;
    searchHistory.addSearchTerm(cleanedTerm);
    await props.data(cleanedTerm);
};

const onFocusInput = () => {
    showDropdown.value = true;
}; 
const onBlurInput = () => {
    setTimeout(() => {
        showDropdown.value = false;
    }, 200);
};
</script>

<template>
    <form @submit="searchExecute($event, searchData)" class="max-w-md mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <!-- Spinner -->
        
        <div v-if="spinerSearch.spiner" class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <svg class="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
        </div>

        <!-- input de la busqueda -->
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input v-model="searchData" @focus="onFocusInput" @blur="onBlurInput" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Key word..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>

        <!-- Dropdown del historial -->
        <div v-show="showDropdown && searchHistory.searchHistory.length>0" id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2 ml-8">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li v-for="term in searchHistory.searchHistory.filter(t => t.trim().length>0)" :key="term">
                    <button @click="searchExecute($event, term, true)" type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ term }}</button>
                </li>
            </ul>
        </div>
    </form>    
</template>