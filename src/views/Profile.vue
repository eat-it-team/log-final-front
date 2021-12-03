<template>

  <home-header-bottom></home-header-bottom>

  <h3 class="text-gray-700 text-3xl text-center font-medium mb-6">
    Профиль
  </h3>

  <div class="text-xl flex justify-center">
    <span class="mx-3 font-medium">Фамилия: </span>
    <span>{{ user.family_name }}</span>
  </div>
  <div class="text-xl flex justify-center">
    <span class="mx-3 font-medium">Имя: </span>
    <span>{{ user.given_name }}</span>
  </div>
</template>

<script setup lang="ts">
import UserDataService from "../services/UserDataService"
import {ref} from "vue";
import ResponseData from "../types/ResponseData";
import HomeHeaderBottom from "../components/HomeHeaderBottom.vue";

const user = ref({
  "sub": "",
  "given_name": "",
  "family_name": "",
  "username": ""
});

UserDataService.userinfo()
  .then((response: ResponseData) => {
    user.value = response.data;
    console.log(user.value.given_name)
    console.log(user.value.family_name)
  });
</script>
