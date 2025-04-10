<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <section class="py-20">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-8">Hi, I'm Dilly Chen</h1>
        <p class="text-xl text-gray-400 mb-12">UI/UX Designer & Developer</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="group">
            <RouterLink to="/project-a" class="block">
              <div class="relative overflow-hidden rounded-lg">
                <div class="bg-gray-800 h-48 w-full"></div>
                <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span class="text-white text-lg font-medium">View Project</span>
                </div>
              </div>
              <h3 class="text-xl font-medium mt-4">Project A - MOODZINE</h3>
              <p class="text-gray-400 mt-2">UI/UX Design & Development</p>
            </RouterLink>
          </div>
          
          <div class="group">
            <RouterLink to="/project-b" class="block">
              <div class="relative overflow-hidden rounded-lg">
                <div class="bg-gray-800 h-48 w-full"></div>
                <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span class="text-white text-lg font-medium">View Project</span>
                </div>
              </div>
              <h3 class="text-xl font-medium mt-4">Project B - FirefoxLite</h3>
              <p class="text-gray-400 mt-2">UI/UX Design & Research</p>
            </RouterLink>
          </div>
          
          <div class="group">
            <RouterLink to="/project-c" class="block">
              <div class="relative overflow-hidden rounded-lg">
                <div class="bg-gray-800 h-48 w-full"></div>
                <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span class="text-white text-lg font-medium">View Project</span>
                </div>
              </div>
              <h3 class="text-xl font-medium mt-4">Project C - IOTION</h3>
              <p class="text-gray-400 mt-2">App Design & Development</p>
            </RouterLink>
          </div>
          
          <div class="group">
            <RouterLink to="/project-d" class="block">
              <div class="relative overflow-hidden rounded-lg">
                <div class="bg-gray-800 h-48 w-full"></div>
                <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span class="text-white text-lg font-medium">View Project</span>
                </div>
              </div>
              <h3 class="text-xl font-medium mt-4">Project D - Blossom</h3>
              <p class="text-gray-400 mt-2">Web Design & Branding</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
