<template>
    <input
        type="checkbox"
        v-model="form.extras.music"
        class="field"
    />
    <label v-if="label">{{ label }}</label>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        }
    }
}
</script>