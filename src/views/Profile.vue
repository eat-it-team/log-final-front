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

  <h3 class="text-gray-700 text-3xl text-center font-medium mb-8 mt-14">
    Привязанные аккаунты
  </h3>

  <div class="border border-gray-500 rounded-xl my-10">
    <div class="flex justify-between p-4">
      Вконтакте
      <svg class=" right-5 h-5 m-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve">
        <g id="Rounded_Rectangle_33_copy_4_1_">
          <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
        </g>
      </svg>
    </div>
    <div class="border-t border-gray-400 p-4">
      Привязать аккаунт
      <div class="mt-2">
        <button class="mx-2 px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"> Добавить </button>
        <input class="w-10/12 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="text">
      </div>
    </div>
  </div>

  <div class="flex justify-between border border-gray-500 rounded-xl p-4 my-10">
    Instagram
    <svg class=" right-5 h-5 m-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve">
      <g id="Rounded_Rectangle_33_copy_4_1_">
        <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
      </g>
    </svg>
  </div>

  <div class="flex justify-between border border-gray-500 rounded-xl p-4 my-10">
    Facebook
    <svg class=" right-5 h-5 m-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve">
      <g id="Rounded_Rectangle_33_copy_4_1_">
        <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
      </g>
    </svg>
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
  });
</script>
