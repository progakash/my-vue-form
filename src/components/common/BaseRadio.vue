<template>
    <input
        :value="value"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
        v-bind="$attrs"
    />
    <label v-if="label">{{ label }}</label>
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
            default: true
        },
        value: {
            type: [String, Number],
            required: true
        }
    }
}
</script>
