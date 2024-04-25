<script setup lang="ts">
import { ref } from 'vue'
import {Input} from "@/lib/registry/new-york/ui/input";
import {Button} from "@/lib/registry/new-york/ui/button";

const props = defineProps({
  isLogin: Boolean,
  toggleMode: Function
})

const isLoading = ref(false)

async function handleSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

async function handleLogin(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

const showPassword = ref(false);

</script>

<template>
      <form v-if="!isLogin" @submit.prevent="handleSubmit">
        <div class="grid gap-2">
          <div class="grid gap-1">
            Email
            <input
                id="email"
                placeholder="name@example.com"
                type="email"
                auto-capitalize="none"
                auto-complete="email"
                auto-correct="off"
                :disabled="isLoading"
                class="bg-[#f9f9ff] rounded-full w-full py-3 px-4 mb-4"
            />
            Username
            <input
                id="username"
                placeholder="Username"
                auto-capitalize="none"
                auto-correct="off"
                autocomplete="username"
                :disabled="isLoading"
                class="bg-[#f9f9ff] rounded-full w-full py-3 px-4 mb-4"
            />
            Password
            <div class="inline-flex items-center justify-end mb-4">
              <input
                  id="password"
                  placeholder="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :disabled="isLoading"
                  autocomplete="new-password"
                  class="bg-[#f9f9ff] rounded-full w-full py-3 px-4">
              </input>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mr-4 text-gray-500" @click="showPassword = !showPassword">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>

            Confirm Password
            <div class="inline-flex items-center justify-end mb-4">
              <input
                  id="confirm-password"
                  placeholder="Confirm Password"
                  :type="showPassword ? 'text' : 'password'"
                  :disabled="isLoading"
                  autocomplete="new-password"
                  class="bg-[#f9f9ff] rounded-full w-full py-3 px-4">
              </input>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mr-4 text-gray-500" @click="showPassword = !showPassword">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>

          </div>
          <div class="lg:grid-cols-2">
            <div class=" flex lg:flex-1 items-center">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              <div class="flex lg:flex-1 lg:justify-end">
                <a href="/examples/authentication" class='text-sm font-semibold leading-6 text-gray-500'>
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <button :disabled="isLoading" class="rounded-full w-full py-3 px-4 mt-4 mb-4 bg-green-600 text-white">
            Sign Up
          </button>
        </div>
      </form>

      <form v-else @submit.prevent="handleLogin">
        <div class="grid gap-2">
          <div class="grid gap-1">
            Username
            <input
                id="username"
                placeholder="Username"
                auto-capitalize="none"
                auto-correct="off"
                autocomplete="username"
                :disabled="isLoading"
                class="bg-[#f9f9ff] rounded-full w-full py-3 px-4 mb-4"
            />
            Password
            <div class="inline-flex items-center justify-end mb-4">
              <input
                  id="password"
                  placeholder="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :disabled="isLoading"
                  autocomplete="current-password"
                  class="bg-[#f9f9ff] rounded-full w-full py-3 px-4">
              </input>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute mr-4 text-gray-500" @click="showPassword = !showPassword">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>

            <div class="lg:grid-cols-2">
              <div class=" flex lg:flex-1 items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                <div class="flex lg:flex-1 lg:justify-end">
                  <a href="/examples/authentication" class='text-sm font-semibold leading-6 text-gray-500'>
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button :disabled="isLoading" class="rounded-full w-full py-3 px-4 bg-green-600 text-white mt-4 mb-4">
            Log in
          </button>
        </div>
      </form>
</template>
