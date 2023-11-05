<script setup>
import { computed } from 'vue';

const props = defineProps({
    value: {
        type: String,
        required: true
    }
});

const transformedValue = computed(() => (props.value || '').replaceAll("'", '"'));
</script>

::: details Example

<slot>

```txt-vue
{
    menuDef
    {
        {{ transformedValue }}
    }
}
```

</slot>

:::
