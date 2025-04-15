<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20">
    <h1 class="text-5xl font-bold mb-4">Project D - Blossom</h1>
    <p class="text-xl text-gray-400 mb-12">Web Design & Branding</p>

    <div class="bg-gray-800 h-72 w-full rounded-lg mb-16"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 class="text-xl font-medium mb-4">Role</h3>
        <p class="text-gray-400">Brand Designer & Web Designer</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Timeline</h3>
        <p class="text-gray-400">2 months (2021)</p>
      </div>

      <div>
        <h3 class="text-xl font-medium mb-4">Tools</h3>
        <p class="text-gray-400">Adobe Illustrator, Figma, Webflow</p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Overview</h2>
      <p class="text-lg text-gray-400 mb-4">
        Blossom is a wellness brand offering sustainable plant-based products for health-conscious
        consumers. The project involved creating a comprehensive brand identity and e-commerce
        website that would appeal to their target audience of environmentally-aware millennials.
      </p>
      <p class="text-lg text-gray-400">
        I developed the brand strategy, visual identity, and website design, focusing on creating a
        cohesive aesthetic that communicated the brand's core values of sustainability, wellness,
        and quality.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Challenge</h2>
      <p class="text-lg text-gray-400">
        The primary challenge was differentiating the brand in a crowded wellness market while
        creating an e-commerce experience that balanced beautiful imagery with functional shopping
        features. The design needed to establish trust and authenticity while driving conversions.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Process</h2>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">1. Brand Strategy & Identity</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Developed the brand strategy, mission, and values through workshops with the client,
          followed by creating visual identity elements including logo, color palette, typography,
          and imagery style.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">2. Website Architecture</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Created the site map and information architecture, focusing on creating intuitive
          navigation and smooth user journeys from discovery to purchase.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-medium mb-4">3. UI Design</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Designed key pages and components, creating a visual language that balanced beautiful
          imagery with clear information hierarchy and call-to-actions.
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-medium mb-4">4. Implementation in Webflow</h3>
        <div class="bg-gray-800 h-56 w-full rounded-lg mb-4"></div>
        <p class="text-lg text-gray-400">
          Built the website in Webflow, implementing responsive layouts, animations, and e-commerce
          functionality to create a polished user experience.
        </p>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Results</h2>
      <p class="text-lg text-gray-400 mb-4">
        The brand and website launch exceeded expectations, with the client reporting a 200%
        increase in online sales compared to their previous website. User feedback was
        overwhelmingly positive, particularly regarding the intuitive navigation and visually
        appealing product presentations.
      </p>
      <p class="text-lg text-gray-400">
        The project also received recognition in the design community, being featured in several
        design publications and winning a local design award.
      </p>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold mb-6">Takeaways</h2>
      <p class="text-lg text-gray-400">
        This project demonstrated the power of aligned brand identity and web design in creating
        compelling e-commerce experiences. It reinforced the importance of understanding target
        audience values and behaviors when designing digital products, particularly in lifestyle
        categories.
      </p>
    </div>

    <div class="flex justify-between items-center pt-8 border-t border-gray-800">
      <RouterLink to="/project-c" class="text-gray-400 hover:text-white transition"
        >← Previous Project</RouterLink
      >
      <RouterLink to="/" class="text-gray-400 hover:text-white transition">Back to Home</RouterLink>
    </div>
  </div>
</template>
