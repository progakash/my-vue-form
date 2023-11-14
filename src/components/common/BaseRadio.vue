<template>
    <input
            type="radio"
            v-model="form.cats"
            :value="1"
            name="cats"
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
