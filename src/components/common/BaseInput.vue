<template>
    <label>{{ label}}</label>
    <input
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="field"
    >
</template>
<!-- <script>
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
</script> -->
<script setup>
defineProps(['modelValue', 'label'])
defineEmits(['update:modelValue'])
</script>