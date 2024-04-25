<script setup lang="ts">
import UserAuth from './components/UserAuth.vue'
import {Button, buttonVariants} from '@/lib/registry/new-york/ui/button'
import { ref } from 'vue'
import {cn} from "@/lib/utils.ts";

const isLogin = ref(false)

function toggleMode() {
  isLogin.value = !isLogin.value
}

</script>

<template>
  <div class="container relative hidden h-auto flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-32 lg:py-16">
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-[url(src/assets/img.png)] bg-center rounded-s-3xl" />
    </div>
    <div class="lg:px-14 lg:py-6 bg-white h-full rounded-e-3xl">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6">
        <div class="flex flex-col ">
          <h2 class="text-xl tracking-tight mb-10">{{ isLogin ? 'Welcome !' : '' }}</h2>
          <h1 class="text-2xl font-semibold tracking-tight">
            {{ isLogin ? 'Login in to' : 'Sign up to' }}
          </h1>
          <h2 class="text-md tracking-tight">Lethimcook is simply</h2>
        </div>
        <UserAuth :isLogin="isLogin" :toggleMode="toggleMode"/>
        <p class="px-8 text-center text-base text-muted-foreground text-gray-500 mt-8">
          {{ isLogin ? "Don't have an account?" : "Already have an Account?" }}
          <button @click="toggleMode" class="underline-none hover:text-orange-700 text-orange-600">{{ isLogin ? 'Register' : 'Login' }}</button>
        </p>
      </div>
    </div>
  </div>
</template>