<template>
    <div>
    <h1>Create an form</h1>
    <form>

      <label>Select a item</label>
      <select v-model="form.item">
        <option
          v-for="option in items"
          :value="option"
          :key="option"
          :selected="option === form.item"
        >{{ option }}</option>
      </select>

      <h3>Basic your information</h3>

      <label>Title</label>
      <input
        v-model="form.title"
        type="text"
        placeholder="Title"
        class="field"
      >

      <label>Description</label>
      <input
        v-model="form.description"
        type="text"
        placeholder="Description"
        class="field"
      />

      <h3>Where are your from?</h3>

      <label>Location</label>
      <input
        v-model="form.location"
        type="text"
        placeholder="Location"
        class="field"
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
<script>
export default {
  data() {
    return {
      items: ['alu', 'tometo', 'pinia', 'vuex'],
      form : {
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
    }
  }
}
</script>