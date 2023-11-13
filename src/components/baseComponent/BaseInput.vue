<template>
    <label>{{ label}}</label>
    <input
        class="field"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :placeholder="label"
    >
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>