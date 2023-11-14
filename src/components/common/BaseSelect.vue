<template>
  <label v-if="label">{{ label }}</label>
   <!-- <select 
      :value="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.value)"
    > -->
    <select 
      :value="modelValue"
      v-bind="{...$attrs, onChange: ($event) => {$emit('update:modelValue', $event.target.value)}}"
    >
      <option
          v-for="option in items"
          :value="option"
          :key="option"
          :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
</template>
<script>
export default {
  props: {
      label: {
          type: String,
          default: ''
      },
      items: {
        type: [Object, Array],
        required: true
      },
      modelValue: {
        type: [String, Number],
        default: ''
      }
  }
}
</script>