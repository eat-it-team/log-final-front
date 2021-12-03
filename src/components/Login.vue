<template>
  <router-link
      class="px-4 py-3 mt-3 m-3 font-medium tracking-wide text-gray-200 "
      :class="logged ? [$route.name === 'Profile' ? activeClass : inactiveClass] : 'hidden'"
      to="/profile"
  >
    Профиль
  </router-link>

  <button
    v-if="logged"
    @click="logout()"
    class="flex mx-4 border border-gray-400 px-4 py-2 text-gray-100 rounded-lg hover:bg-indigo-700 focus:outline-none"
  >
    Выйти
  </button>
  <button
    v-else
    @click="open = true"
    class="flex mx-4 border border-gray-400 px-4 py-2 text-gray-100 rounded-lg hover:bg-indigo-700 focus:outline-none"
  >
    Войти
  </button>

  <div
    :class="`modal ${
      !open && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div
      @click="open = false"
      class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
    ></div>

    <div
      class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
    >
      <div
        class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
      >
        <svg
          class="text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <!--Title-->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Войти через Госуслуги</p>
          <div class="z-50 cursor-pointer modal-close" @click="open = false">
            <svg
              class="text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>

        <!--Body-->
        <div class="px-5 py-3 mb-3 text-gray-700 bg-gray-200 border-b">

          <div
              class="inline-flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md"
              v-if="message.length > 0"
          >
            <div class="flex items-center justify-center w-12 bg-red-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>
            </div>
            <div class="px-4 py-2 -mx-3"><div class="mx-3">
            <span class="font-semibold text-red-500">
              Ошибка
            </span>
              <p class="text-sm text-gray-600">{{ message }}</p>
            </div></div>
          </div>

          <label class="text-xs">Логин</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </span>
            <input type="text"
                   class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                   v-model="username"
            >
          </div>

          <label class="text-xs">Пароль</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 60 60" stroke="currentColor" >
                <path id="path1096" style="stroke-linejoin:round;stroke:#ffffff;stroke-linecap:round;stroke-width:8.125;fill:none" d="m55.312 49.574h-50.624v-39.148h50.624"/>
                <g id="g1089" transform="matrix(1.0062 0 0 1.0062 -.97179 -1.3648)">
                  <path id="path831" style="fill-rule:evenodd;stroke-width:3.125;fill:#ffffff" d="m56.094 11.062h-46.813c-2.1622 0-3.8748 1.744-3.8748 3.907v31.531c0 2.162 1.7126 3.875 3.875 3.875h46.813"/>
                  <path id="path829" style="fill:#000000" d="m42.105 20.907c0.521 0 1 0.087 1.434 0.261 0.452 0.174 0.809 0.452 1.07 0.835 0.261 0.365 0.391 0.835 0.391 1.408 0 0.435-0.069 1.026-0.209 1.774-0.139 0.731-0.234 1.287-0.287 1.67 0.557-0.383 1.053-0.739 1.487-1.07 0.453-0.348 0.887-0.617 1.305-0.808 0.417-0.209 0.826-0.313 1.226-0.313 0.817 0 1.504 0.313 2.06 0.939 0.557 0.626 0.835 1.356 0.835 2.191 0 0.591-0.226 1.087-0.678 1.487s-1.183 0.808-2.191 1.226c-1.009 0.4-1.548 0.617-1.618 0.652 0.07 0.035 0.609 0.261 1.618 0.678 1.026 0.417 1.756 0.817 2.191 1.2 0.452 0.365 0.678 0.843 0.678 1.435 0 0.852-0.278 1.6-0.835 2.243-0.556 0.644-1.243 0.965-2.06 0.965-0.557 0-1.192-0.243-1.905-0.73s-1.417-0.974-2.113-1.461c0.087 0.557 0.192 1.148 0.314 1.774 0.121 0.626 0.182 1.156 0.182 1.591 0 0.87-0.278 1.522-0.835 1.956-0.539 0.418-1.226 0.627-2.06 0.627-0.818 0-1.505-0.209-2.061-0.627-0.539-0.434-0.809-1.086-0.809-1.956 0-0.278 0.07-0.8 0.209-1.565s0.226-1.365 0.261-1.8c-0.922 0.643-1.531 1.078-1.826 1.304-0.296 0.209-0.652 0.409-1.07 0.6-0.4 0.192-0.782 0.287-1.147 0.287-0.835 0-1.513-0.313-2.035-0.939-0.504-0.626-0.757-1.382-0.757-2.269 0-0.626 0.218-1.122 0.652-1.487 0.435-0.365 1.14-0.739 2.113-1.122 0.974-0.4 1.531-0.635 1.67-0.704-0.139-0.07-0.696-0.296-1.67-0.678-0.956-0.4-1.66-0.792-2.113-1.174-0.434-0.4-0.652-0.905-0.652-1.513 0-0.852 0.253-1.583 0.757-2.191 0.522-0.626 1.2-0.939 2.035-0.939 0.521 0 0.999 0.139 1.434 0.417 0.452 0.278 1.322 0.869 2.609 1.774-0.035-0.383-0.122-0.983-0.261-1.8-0.139-0.818-0.209-1.365-0.209-1.644 0-0.869 0.27-1.504 0.809-1.904 0.556-0.4 1.243-0.6 2.061-0.6zm-20.791 0c0.522 0 1 0.087 1.435 0.261 0.452 0.174 0.809 0.452 1.07 0.835 0.261 0.365 0.391 0.835 0.391 1.408 0 0.435-0.07 1.026-0.209 1.774-0.139 0.731-0.235 1.287-0.287 1.67 0.557-0.383 1.052-0.739 1.487-1.07 0.452-0.348 0.887-0.617 1.304-0.808 0.418-0.209 0.827-0.313 1.226-0.313 0.818 0 1.505 0.313 2.061 0.939 0.557 0.626 0.835 1.356 0.835 2.191 0 0.591-0.226 1.087-0.678 1.487s-1.183 0.808-2.191 1.226c-1.009 0.4-1.548 0.617-1.618 0.652 0.07 0.035 0.609 0.261 1.618 0.678 1.026 0.417 1.756 0.817 2.191 1.2 0.452 0.365 0.678 0.843 0.678 1.435 0 0.852-0.278 1.6-0.835 2.243-0.556 0.644-1.243 0.965-2.061 0.965-0.556 0-1.191-0.243-1.904-0.73s-1.417-0.974-2.113-1.461c0.087 0.557 0.192 1.148 0.313 1.774 0.122 0.626 0.183 1.156 0.183 1.591 0 0.87-0.278 1.522-0.835 1.956-0.539 0.418-1.226 0.627-2.061 0.627-0.817 0-1.504-0.209-2.06-0.627-0.539-0.434-0.809-1.086-0.809-1.956 0-0.278 0.07-0.8 0.209-1.565s0.226-1.365 0.261-1.8c-0.922 0.643-1.531 1.078-1.826 1.304-0.296 0.209-0.653 0.409-1.07 0.6-0.4 0.192-0.783 0.287-1.148 0.287-0.834 0-1.513-0.313-2.034-0.939-0.505-0.626-0.757-1.382-0.757-2.269 0-0.626 0.218-1.122 0.652-1.487 0.435-0.365 1.139-0.739 2.113-1.122 0.974-0.4 1.531-0.635 1.67-0.704-0.139-0.07-0.696-0.296-1.67-0.678-0.956-0.4-1.661-0.792-2.113-1.174-0.434-0.4-0.652-0.905-0.652-1.513 0-0.852 0.252-1.583 0.757-2.191 0.521-0.626 1.2-0.939 2.034-0.939 0.522 0 1 0.139 1.435 0.417 0.452 0.278 1.322 0.869 2.609 1.774-0.035-0.383-0.122-0.983-0.261-1.8-0.139-0.818-0.209-1.365-0.209-1.644 0-0.869 0.27-1.504 0.809-1.904 0.556-0.4 1.243-0.6 2.06-0.6z"/>
                  <path id="path832" style="stroke-linejoin:round;stroke:#000000;stroke-linecap:round;stroke-width:3.1058;fill:none" d="m55.938 50.625h-50.313v-38.906h50.313"/>
                </g>
              </svg>
            </span>
            <input type="password"
                   class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                   v-model="password"
            >
          </div>
        </div>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            @click="open = false"
            class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
          >
            Закрыть
          </button>
          <button
            @click="login()"
            class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EsiaDataService from "../services/EsiaDataService";
import ResponseData from "../types/ResponseData";

const open = ref(false);
const logged = ref(EsiaDataService.getLocalToken() != undefined && EsiaDataService.getLocalToken() != null);

const activeClass = ref(
    "text-white"
);
const inactiveClass = ref(
    "text-gray-200 hover:text-gray-100"
);

const username = ref("");
const password = ref("");

const message = ref("");

function login() {
  if (username.value.length == 0 || password.value.length == 0) {
    message.value = 'Заполните логин и пароль'
    return
  }

  EsiaDataService.getToken(username.value, password.value)
    .then((response: ResponseData) => {
      message.value = '';
      logged.value = true;
      open.value = false;
      // TODO uncomment and refactor or delete
      // router.push("/result");
      EsiaDataService.saveLocalToken(response.data.access_token, response.data.refresh_token);
    })
    .catch((e: Error) => {
      message.value = 'Неправильный логин или пароль';
      console.log(e);
    });
}

function logout() {
  EsiaDataService.removeLocalToken();
}
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>