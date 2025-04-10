<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20">
    <h1 class="text-5xl font-bold mb-4">Project A - MOODZINE</h1>
    <p class="text-xl text-gray-400 mb-12">UI/UX Design & Development</p>
    
    <div class="bg-gray-800 h-72 w-full rounded-lg mb-16"></div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 class="text-xl font-medium mb-4">Role</h3>
        <p class="text-gray-400">UI/UX Designer & Developer</p>
      </div>
      
      <div>
        <h3 class="text-xl font-medium mb-4">Timeline</h3>
        <p class="text-gray-400">3 months (2023)</p>
      </div>
      
      <div>
        <h3 class="text-xl font-medium mb-4">Tools</h3>
        <p class="text-gray-400">Figma, Vue.js, Tailwind CSS</p>
      </div>
    </div>
    
    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Overview</h2>
      <p class="text-lg text-gray-400 mb-4">
        MOODZINE is a digital magazine platform focusing on mood-based content curation. 
        The project aimed to create an immersive reading experience that adapts to the user's current mood.
      </p>
      <p class="text-lg text-gray-400">
        I designed and developed the entire platform from concept to implementation, focusing on creating 
        a seamless user experience with intuitive navigation and visually appealing layouts.
      </p>
    </div>
    
    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Challenge</h2>
      <p class="text-lg text-gray-400">
        The main challenge was to create a dynamic content system that could effectively categorize and present 
        articles based on different moods while maintaining a cohesive visual identity throughout the platform.
      </p>
    </div>
    
    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Process</h2>
      
      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">1. Research & Discovery</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Conducted user interviews and competitive analysis to understand reading habits and mood-based content consumption.
        </p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">2. Wireframing & Information Architecture</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Created wireframes and user flows to establish the core structure and navigation patterns of the platform.
        </p>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">3. Visual Design</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Developed a comprehensive design system with mood-based color schemes, typography, and component variations.
        </p>
      </div>
      
      <div>
        <h3 class="text-2xl font-medium mb-4">4. Development & Implementation</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Built the platform using Vue.js and Tailwind CSS, implementing responsive layouts and smooth transitions.
        </p>
      </div>
    </div>
    
    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Results</h2>
      <p class="text-lg text-gray-400 mb-4">
        The MOODZINE platform successfully launched with positive user feedback, particularly regarding 
        the intuitive mood-based navigation and visually appealing interface.
      </p>
      <p class="text-lg text-gray-400">
        Key metrics showed high engagement rates, with users spending an average of 15 minutes per session 
        and exploring content across multiple mood categories.
      </p>
    </div>
    
    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Takeaways</h2>
      <p class="text-lg text-gray-400">
        This project reinforced the importance of emotional design in digital products and highlighted 
        the effectiveness of content personalization based on user context. The technical implementation 
        also provided valuable insights into building dynamic content systems with Vue.js.
      </p>
    </div>
    
    <div class="flex justify-between items-center pt-8 border-t border-gray-800">
      <RouterLink to="/" class="text-gray-400 hover:text-white transition">← Back to Projects</RouterLink>
      <RouterLink to="/project-b" class="text-gray-400 hover:text-white transition">Next Project →</RouterLink>
    </div>
  </div>
</template> 