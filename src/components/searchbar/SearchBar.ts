/* eslint-disable */

import { computed, defineComponent, ref } from "vue";
import SearchResult from "@/components/search-results/SearchResult.vue";
import { usePlacesStore } from "@/composables";




export default defineComponent({

  name: 'SearchBar',
  components: {
    SearchResult
  },
  setup() {

    const { searchPlacesByTerm } = usePlacesStore();

    const debounceTimeOut = ref();
    const debouncedValue = ref('');

    return {
      debouncedValue,
      searchTerm: computed({
        get() {
          return debouncedValue.value;
        },
        set(val: string) {
          
          if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

          debounceTimeOut.value = setTimeout(() => {
            debouncedValue.value = val;
            searchPlacesByTerm(val);
          }, 500);
        }
      }),
    }

  }

});