<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20">
    <h1 class="text-5xl font-bold mb-4">Project C - IOTION</h1>
    <p class="text-xl text-gray-400 mb-12">App Design & Development</p>

    <div class="bg-gray-800 h-72 w-full rounded-lg mb-16"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 class="text-xl font-medium mb-4">Role</h3>
        <p class="text-gray-400">Product Designer & Frontend Developer</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Timeline</h3>
        <p class="text-gray-400">6 months (2022-2023)</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Tools</h3>
        <p class="text-gray-400">Figma, React Native, Firebase</p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Overview</h2>
      <p class="text-lg text-gray-400 mb-4">
        IOTION is a productivity mobile application that combines note-taking, task management, and
        habit tracking in a single integrated platform. The project aimed to create a seamless
        experience for users to organize their personal and professional lives.
      </p>
      <p class="text-lg text-gray-400">
        I was responsible for designing the user experience and interface, as well as implementing
        the frontend using React Native. The application was designed with a focus on simplicity and
        powerful customization options.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Challenge</h2>
      <p class="text-lg text-gray-400">
        The main challenge was creating a unified interface that seamlessly integrated multiple
        productivity features without overwhelming users. Additionally, ensuring consistent
        performance across both iOS and Android platforms while maintaining a native feel required
        careful consideration of platform-specific design patterns.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Process</h2>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">1. User Research & Problem Definition</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Conducted surveys and interviews with target users to understand their productivity
          challenges and current tool usage patterns.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">2. Ideation & Concept Development</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Created user personas, journey maps, and key scenarios to guide the design process and
          identify core features.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">3. UI Design & Prototyping</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Designed the user interface with a focus on minimalism and accessibility, creating
          interactive prototypes for user testing.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium mb-4">4. Development & Iteration</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Implemented the frontend using React Native, conducting regular user testing and iterating
          on the design based on feedback.
        </p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Results</h2>
      <p class="text-lg text-gray-400 mb-4">
        IOTION was successfully launched on both iOS and Android platforms, quickly gaining a
        dedicated user base of over 50,000 within the first three months. The app received positive
        reviews for its intuitive interface and seamless integration of productivity features.
      </p>
      <p class="text-lg text-gray-400">
        Key metrics showed strong user engagement, with an average of 5 sessions per week per user
        and a retention rate of 65% after 30 days.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Takeaways</h2>
      <p class="text-lg text-gray-400">
        This project reinforced the importance of focused user research and iterative design in
        creating successful digital products. It also provided valuable insights into cross-platform
        development challenges and the balance between feature richness and interface simplicity.
      </p>
    </div>

    <div class="flex justify-between items-center pt-8 border-t border-gray-800">
      <RouterLink to="/project-b" class="text-gray-400 hover:text-white transition"
        >← Previous Project</RouterLink
      >
      <RouterLink to="/project-d" class="text-gray-400 hover:text-white transition"
        >Next Project →</RouterLink
      >
    </div>
  </div>
</template>
