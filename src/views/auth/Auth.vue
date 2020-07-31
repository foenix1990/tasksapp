<template>
  <div class="container">
    <div class="top">
      Менеджер задач
      <span>версия 1.0.1</span>
    </div>
    <div class="scene">
      <div class="carousel" :style="{transform: 'rotateY(' + transform + 'deg)'}">
        <div class="carousel__cell"></div>
        <div class="carousel__cell"></div>
        <div class="carousel__cell window" :class="[slide === 3 ? 'active' : '']">
          <Recover v-on:next="next" />
        </div>
        <div class="carousel__cell"></div>
        <div class="carousel__cell window" :class="[slide === 2 ? 'active' : '']">
          <SignUpView v-on:next="next" />
        </div>
        <div class="carousel__cell window" :class="[slide === 1 ? 'active' : '']">
          <SignInView v-on:next="next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInView from './SignInView'
import SignUpView from './SignUpView'
import Recover from './Recover'

export default {
  name: 'Auth',
  components: {
    SignInView,
    SignUpView,
    Recover
  },
  data() {
    return {
      transform: 0,
      slide: 1,
    }
  },
  methods: {
    next(val) {
      this.transform = val.direction ? this.transform + 120 : this.transform - 120;
      this.slide = val.slide;
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
  @include flex(center, center, row);
  @include box(100%, 100%, absolute, 0, 0, null, null);
  background-color: #222222;
  perspective: 100vw;
  perspective-origin: center center;
  .top{
    @include box(100%, 0, absolute, 0, 0, null, null);
    color: #666;
    @include flex(center, center, column);
    padding: 6vw 0;
    font-size: 1.6vw;
    letter-spacing: 0.1vw;
    font-weight: 300;
    span{
      font-size: 1vw;
      padding-top: 0.5vw;
    }
  }
  .scene {
    width: 18vw;
    height: 19vw;
    position: relative;
    .carousel {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transition: 1s;
      .carousel__cell {
        backface-visibility: visibility;
        position: absolute;
        width: 18vw;
        height: 19vw;
        background-color: rgba(0, 0, 0, 0.1);
        &:nth-child(1) { transform: rotateY(-60deg) translateZ(18vw); }
        &:nth-child(2) { transform: rotateY(60deg) translateZ(18vw); }
        &:nth-child(3) { transform: rotateY(120deg) translateZ(18vw); }
        &:nth-child(4) { transform: rotateY(180deg) translateZ(18vw); }
        &:nth-child(5) { transform: rotateY(240deg) translateZ(18vw); }
        &:nth-child(6) { transform: rotateY(360deg) translateZ(18vw); }
        &.window{
          width: 100%;
          height: 100%;
          background-color: #111111;
          transition: 1s;
          opacity: 0.2;
          &.active{
            opacity: 1;
          }
          &:after{
            content: '';
            width: 100%;
            height: 3vw;
            position: absolute;
            left: 0;
            top: calc(100% + 0.5vw);
            background: linear-gradient(rgba(17, 17, 17, 0.9), rgba(34, 34, 34, 1));
            transition: 2s;
          }
        }
      }
    }
  }
}
</style>
