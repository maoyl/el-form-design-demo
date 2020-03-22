<template>
  <div class="home">
    <formdesign @save='save'/>
  </div>
</template>

<script>
export default {
  name: 'formdesignpage',
  components: {
  },
  methods: {
    save (data) {
      console.log(data)
    }
  }
}
</script>
