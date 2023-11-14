<template>
    <label>{{ label }}</label>
      <select v-model="form.item">
        <option
          v-for="option in items"
          :value="option"
          :key="option"
          :selected="option === form.item"
        >{{ option }}</option>
      </select>
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