<template>
    <div>
    <h1>Create an form</h1>
    <form>
      <BaseSelect
        v-model="form.item"
        label="Select a item"
        :items="items"
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
        <input
            type="radio"
            v-model="form.cats"
            :value="1"
            name="cats"
          />
        <label>Yes</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="form.cats"
          :value="0"
          name="cats"
        />
        <label>No</label>
      </div>

      <h3>Extra activities</h3>
      <div>
        <input
          type="checkbox"
          v-model="form.extras.sport"
          class="field"
        />
        <label>Sports</label>
      </div>

      <div>
        <input
          type="checkbox"
          v-model="form.extras.music"
          class="field"
        />
        <label>Music</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import BaseInput from './common/BaseInput.vue'
import BaseSelect from './common/BaseSelect.vue'

const items = ref(['option', 'compositon', 'pinia', 'vuex']);
const form  = ref(
    {
        item: '',
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
</script>