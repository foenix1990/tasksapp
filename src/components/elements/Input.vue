<template>
  <div class="inputBlock" :class="[model.length > 0 ? 'start' : '', getValid() ? 'valid' : '']">
    <input :type="type" v-model="model" :style="{paddingRight: icon !== '' ? '2vw' : 0}" required maxlength="24" />
    <div>{{text}}</div>
    <img :src="require('@/assets/' + icon)" v-if="icon !== ''"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    text: String,
    model: String,
    length: String,
    icon: String,
  },
  watch: {
    model(val) {
      this.$emit('change', val);
      this.$emit('valid', this.getValid());
    }
  },
  methods: {
    getValid() {
      const req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.type === 'email') {
        if (req.test(this.model)) {
          return true;
        }
      } else {
        if (this.model.length >= Number(this.length)) {
          return true;
        }
      }
      return false;
    }
  },
}
</script>

<style lang="scss" scoped>
.inputBlock{
  @include box(100%, 0, relative, 0, 0, 0, 0);
  input{
    width: 100%;
    height: 2.5vw;
    font-size: 0.8vw;
    border: 0;
    background-color: transparent;
    outline: none;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.05vw;
    z-index: 2;
    color: #777777;
    transition: 0.3s;
  }
  div{
    font-size: 0.65vw;
    font-family: 'Roboto', sans-serif;
    @include box(100%, 100%, absolute, 0, 0, 0, 0);
    @include flex(left, center, row);
    padding-left: 0;
    transition: 0.3s;
    color: #777777;
    letter-spacing: 0.07vw;
    text-transform: uppercase;
    font-weight: 300;
    &:before{
      content: '';
      @include box(100%, 0.05vw, absolute, 0, null, null, 0);
      background-color: #222222;
    }
    &:after{
      content: '';
      @include box(0.01vw, 0, absolute, 0, null, null, 0);
      transition: 0.3s;
      background-color: rgba(255, 94, 94, 0.6);
    }
  }
  &.start{
    div{
      padding-left: 3vw;
      color: transparent;
      &:after{
        @include box(100%, 0.05vw, absolute, 0, null, null, 0);
      }
    }
  }
  &.valid{
    input{
      color: rgba(4, 168, 108, 0.5);
    }
    div{
      &:after{
        background-color: rgba(4, 168, 108, 0.5);
      }
    }
  }
  img{
    @include box(0.6vw, 0.6vw, absolute, null, null, 0.5vw, 0.9vw);
  }
}
</style>
