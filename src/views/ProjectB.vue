<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20">
    <h1 class="text-5xl font-bold mb-4">Project B - FirefoxLite</h1>
    <p class="text-xl text-gray-400 mb-12">UI/UX Design & Research</p>

    <div class="bg-gray-800 h-72 w-full rounded-lg mb-16"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 class="text-xl font-medium mb-4">Role</h3>
        <p class="text-gray-400">UX Designer & Researcher</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Timeline</h3>
        <p class="text-gray-400">4 months (2022)</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Tools</h3>
        <p class="text-gray-400">Figma, Adobe XD, InVision</p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Overview</h2>
      <p class="text-lg text-gray-400 mb-4">
        FirefoxLite is a lightweight browser alternative designed for emerging markets with limited
        data connectivity and lower-end devices. The project focused on optimizing user experience
        while minimizing resource usage.
      </p>
      <p class="text-lg text-gray-400">
        I led the UX design and research efforts, working closely with the development team to
        identify user needs and design solutions that balanced performance with usability.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Challenge</h2>
      <p class="text-lg text-gray-400">
        The primary challenge was to create a browsing experience that maintained essential
        functionality while significantly reducing data consumption and memory usage. Additionally,
        the interface needed to be intuitive for users with varying levels of technical literacy.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Process</h2>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">1. User Research</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Conducted field studies and interviews with users in target markets to understand their
          browsing habits, pain points, and device constraints.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">2. Competitive Analysis</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Analyzed existing lightweight browsers to identify best practices and opportunities for
          innovation.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">3. Wireframing & Prototyping</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Created low-fidelity wireframes and interactive prototypes to test core functionality and
          navigation concepts.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium mb-4">4. Usability Testing & Iteration</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Conducted multiple rounds of usability testing with target users, iterating on the design
          based on feedback.
        </p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Results</h2>
      <p class="text-lg text-gray-400 mb-4">
        The redesigned FirefoxLite browser achieved a 40% reduction in data usage and 30% decrease
        in memory consumption compared to standard browsers, while maintaining core functionality.
      </p>
      <p class="text-lg text-gray-400">
        User adoption exceeded targets by 25% in the first quarter after launch, with particularly
        strong growth in regions with limited connectivity.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Takeaways</h2>
      <p class="text-lg text-gray-400">
        This project emphasized the importance of understanding specific user contexts and
        technological constraints when designing digital products. It also highlighted how
        thoughtful feature prioritization can create meaningful experiences even with significant
        technical limitations.
      </p>
    </div>

    <div class="flex justify-between items-center pt-8 border-t border-gray-800">
      <RouterLink to="/project-a" class="text-gray-400 hover:text-white transition"
        >← Previous Project</RouterLink
      >
      <RouterLink to="/project-c" class="text-gray-400 hover:text-white transition"
        >Next Project →</RouterLink
      >
    </div>
  </div>
</template>
