<template>
  <div class="buttonBlock" :class="[blocked ? 'blocked' : '']">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    text: String,
    blocked: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.buttonBlock{
  @include box(100%, 0, relative, 0, 0, 0, 0);
  background-color: #ff4747;
  @include flex(center, center, row);
  padding: 0.7vw 0;
  font-size: 0.8vw;
  text-transform: uppercase;
  font-weight: 500;
  color: #FFFFFF;
  letter-spacing: 0.05vw;
  cursor: pointer;
  border-radius: 0.2vw;
  transition: 0.3s;
  &:hover{
    opacity: 0.7;
  }
  &.blocked{
    background-color: #DDDDDD;
    color: #888888;
    opacity: 0.5;
    cursor: default;
  }
}
</style>
