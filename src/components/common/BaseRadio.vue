<template>
    <input
        :value="modelValue"
        v-bind="$attrs"
        @change="$emit('update:modelValue', $event.target.value)"
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
            type: boolean,
            default: true
        }
    }
}
</script>
