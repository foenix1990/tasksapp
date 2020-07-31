<template>
  <div class="signIn">
    <div class="title">Авторизация</div>
    <Input class="input" type="email" text="E-mail" :model="email" v-on:valid="emailValid = $event" v-on:change="email = $event" length="6" icon="mail.svg" />
    <Input class="input" type="password" text="Пароль" :model="password" v-on:valid="passwordValid = $event" v-on:change="password = $event" length="6" icon="key.svg" />
    <div class="buttons">
      <div class="row lft">
        <div class="links" @click="next(2, true)">Регистрация</div>
      </div>
      <div class="row rgt">
        <div class="links" @click="next(3, false)">Забыл пароль</div>
      </div>
    </div>
    <div class="button" @click="open" :class="[emailValid && passwordValid ? '' : 'blocked']">Войти</div>
  </div>
</template>

<script>
import Input from '@/components/elements/Input'

export default {
  name: 'SignIn',
  components: {
    Input,
  },
  data() {
    return {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false
    }
  },
  methods: {
    next(slide, direction) {
      this.email = '';
      this.password = '';
      this.emailValid = false;
      this.passwordValid = false;
      this.$emit('next', {slide: slide, direction: direction});
    },
    open() {

    }
  },
}
</script>

<style lang="scss" scoped>
.signIn{
  @include flex(center, center, column);
  @include box(100%, 0, relative, 0, 0, null, null);
  padding: 2vw;
  .title{
    font-size: 0.9vw;
    letter-spacing: 0.1vw;
    color: #999999;
    text-transform: uppercase;
    @include flex(center, center, row);
    font-weight: 300;
    margin-bottom: 0.5vw;
  }
  .input{
    margin-top: 1vw;
  }
  .buttons{
    @include box(100%, 0, relative, null, null, null, null);
    margin-top: 2vw;
    @include flex(left, center, row);
    .row{
      width: 50%;
      &.lft{
        @include flex(left, top, row);
      }
      &.rgt{
        @include flex(right, top, row);
      }
      .links{
        font-size: 0.65vw;
        text-transform: uppercase;
        letter-spacing: 0.05vw;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        transition: 0.1s;
        color: #888888;
        &:hover{
          color: #CCCCCC;
        }
      }
    }
  }
  .button{
    @include box(100%, 0, relative, null, null, null, null);
    @include flex(center, center, row);
    margin-top: 1.5vw;
    font-weight: 300;
    font-size: 0.7vw;
    letter-spacing: 0.05vw;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: #00410f;
    padding: 0.6vw 0;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 0.1vw;
    user-select: none;
    &:hover{
      background-color: #006a19;
    }
    &.blocked{
      background-color: #1A1A1A;
      color: #555555;
      cursor: default;
      opacity: 1;
    }
  }
}
</style>
