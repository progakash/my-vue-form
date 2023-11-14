<template>
    <label>{{ label}}</label>
    <input
        :modelValue="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="field"
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