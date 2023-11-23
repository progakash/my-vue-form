<template>
    <div>
    <h1>Create an form</h1>
    <form>
      <BaseSelect
        v-model="form.item"
        label="Select a item"
        :options="items"
      />
      
      <h3>Basic your information</h3>

        <BaseInput
            v-model="form.title"
            label="Title"
            type="text"
        />

      <BaseInput
            v-model="form.description"
            label="Description"
            type="text"
        />

      <h3>Where are your from?</h3>

      <BaseInput
            v-model="form.location"
            label="Location"
            type="text"
        />

      <h3>Are cat allowed?</h3>
      <div>
        <BaseRadioGroup 
          v-model="form.cats"
          name="cats"
          type="radio"
          :options="catOptions"
        />
      </div>

      <h3>Extra activities</h3>
      <div>
        <BaseCheckBox
          label="Sports"
          v-model="form.extras.sport"
          type="checkbox"
        />
      </div>

      <div>
        <BaseCheckBox
          label="Music"
          v-model="form.extras.music"
          type="checkbox"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script setup>
import BaseRadio from './common/BaseRadio.vue';

const items = ref(['option', 'compositon', 'pinia', 'vuex']);
const form  = ref(
    {
        item: 'hello',
        title: '',
        description: '',
        location: '',
        cats: 1,
        extras: {
          sport: false,
          music: false
        }
    }
);

const catOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
])
</script>