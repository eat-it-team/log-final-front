<template>
  <h3 class="text-gray-700 text-3xl text-center font-medium">Profile</h3>
</template>

<script setup lang="ts">
import UserDataService from "../services/UserDataService"
import {ref} from "vue";
import ResponseData from "../types/ResponseData";

const user = ref({});

UserDataService.userinfo()
  .then((response: ResponseData) => {
    user.value = response.data;
    console.log(user)
  });
</script>
