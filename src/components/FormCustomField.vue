<template>
    <div>
    <h1>Create an form</h1>
    <form @submit.prevent="submitForm">
      <BaseSelect
        v-model="form.item"
        label="Select a item"
        :options="items"
      />
      
      <h3>Basic your information</h3>

        <BaseInput
            v-model="title"
            label="Title"
            type="text"
            v-bind="titleAttrs"
        />
        <span>{{ errors.title }}</span>
        <!-- <span>{{ ErrorMessage }}</span> -->

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
          vertical
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
import axios from 'axios'
// import { ErrorMessage, useField } from 'vee-validate';
import { useForm } from 'vee-validate';
import * as yup from 'yup';



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
const sendForm = (e) => {
  axios.post(
    'url', 
    form.value
    )
    .then((response) => {
      console.log('response', response)
    })
    .catch((err) => {
      console.log('Error', err)
    })
}
//const title = ref('');


const { errors, submitForm, defineField } = useForm({
  validationSchema: yup.object({
    title: yup.string().title().required()
  }),
});

const [title, titleAttrs] = defineField('title');
// const titleVal = useField('title', (value) => {
//   console.log('hello', value)
//   if (!value) {
//     return 'This field is required'
//   }
//   return true
// })

// const { value, errorMessage } = useField('title', value => {
//   if (!value) {
//     return 'This field is required';
//   }
//   if (value.length < 8) {
//     return 'password must be at least 8 characters long';
//   }
//   return true;
// });
</script>