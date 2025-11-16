<template>
  <header class="bg-secondary-900 border-b border-secondary-700">
    <div class="container mx-auto flex w-full px-4 py-2 md:py-4">
      <div class="flex items-center justify-between w-full h-16 md:h-20">
        <!-- Left Side: Mobile Menu Button + Logo -->
        <div class="flex items-center gap-2 md:gap-4 flex-1">
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="p-2 text-white hover:text-primary-500 transition-colors"
              aria-label="Toggle menu">
              <Icon v-if="!isMobileMenuOpen" icon="mdi:menu" class="w-6 h-6" />
              <Icon v-else icon="mdi:close" class="w-6 h-6" />
            </button>
          </div>

          <!-- Logo-->
          <nuxt-link to="/home" class="wrap-logo flex items-center">
            <div>
              <img :src="logoImage" alt="Xiaomi Logo" class="w-24 h-12 md:w-40 md:h-20 object-contain" />
            </div>
          </nuxt-link>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex list-none items-center gap-6 ml-4">
            <li>
              <nuxt-link to="/home"
                class="text-base md:text-lg uppercase font-medium p-2 text-primary-500 hover:text-primary-500 bg-secondary-600 rounded-lg transition-colors">home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product"
                class="text-base md:text-lg uppercase font-medium p-2 text-neutral-200 hover:text-primary-500 transition-colors">product</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact"
                class="text-base md:text-lg uppercase font-medium p-2 text-neutral-200 hover:text-primary-500 transition-colors">contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/price"
                class="text-base md:text-lg uppercase font-medium p-2 text-neutral-200 hover:text-primary-500 transition-colors">price</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Right Side: Buttons + Language Selector (Always visible) -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Mobile Buttons -->
          <div class="md:hidden flex items-center gap-2">
            <Button to="pages/register-account.vue" customClass="text-neutral-900 italic text-xs px-3 py-1.5"
              variant="primary" size="small" text="SIGN UP" @click="handleSignUp" />
            <Button to="pages/login.vue" customClass="text-neutral-200 italic text-xs px-3 py-1.5" variant="secondary"
              size="small" text="LOG IN" @click="handleLogIn" />
          </div>

          <!-- Desktop Actions -->
          <div class="hidden md:flex items-center gap-4">
            <Button to="pages/register-account.vue"
              customClass="text-neutral-900 italic text-sm md:text-base px-4 md:px-8 py-2" variant="primary"
              size="small" text="SIGN UP" @click="handleSignUp" />
            <Button to="pages/login.vue" customClass="text-neutral-200 italic text-sm md:text-base px-4 md:px-8 py-2"
              variant="secondary" size="small" text="LOG IN" @click="handleLogIn" />
          </div>

          <!-- Language Selector (Both Mobile & Desktop) -->
          <select
            class="bg-secondary-900 text-neutral-100 text-xs md:text-base uppercase py-1 md:py-2 px-2 md:px-3 rounded md:rounded-lg border-secondary-700">
            <option>eng</option>
            <option>vie</option>
          </select>
        </div>
      </div>

      <!-- Mobile Menu Sidebar -->
      <Teleport to="body">
        <Transition name="backdrop">
          <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/60" @click="closeMobileMenu"></div>

            <!-- Sidebar Content -->
            <Transition name="sidebar">
              <div v-if="isMobileMenuOpen" class="absolute inset-y-0 left-0 w-80 bg-secondary-900 overflow-y-auto">
                <!-- Header with Close, Logo, and Buttons -->
                <div class="flex items-center justify-between px-4 py-4 border-b border-secondary-700">
                  <!-- Close Button -->
                  <button @click="closeMobileMenu" class="p-2 text-white hover:text-primary-500 transition-colors">
                    <Icon icon="mdi:close" class="w-6 h-6" />
                  </button>

                  <!-- Logo -->
                  <nuxt-link to="/home" @click="closeMobileMenu" class="flex items-center">
                    <img :src="logoImage" alt="Xiaomi Logo" class="h-8 object-contain" />
                  </nuxt-link>

                  <!-- Buttons -->
                  <div class="flex items-center gap-2">
                    <Button customClass="text-neutral-900 italic text-xs px-3 py-1.5" variant="primary" size="small"
                      text="SIGN UP" @click="handleSignUp" />
                    <Button customClass="text-neutral-200 italic text-xs px-3 py-1.5 border-white" variant="secondary"
                      size="small" text="LOG IN" @click="handleLogIn" />
                  </div>
                </div>

                <!-- Navigation Links -->
                <div class="px-4 py-4">
                  <ul class="list-none flex flex-col gap-2">
                    <li>
                      <nuxt-link to="/home" @click="closeMobileMenu"
                        class="block text-base uppercase font-medium p-3 text-primary-500 bg-secondary-600 rounded-lg transition-colors">HOME</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/product" @click="closeMobileMenu"
                        class="block text-base uppercase font-medium p-3 text-neutral-200 hover:text-primary-500 transition-colors">PRODUCT</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/contact" @click="closeMobileMenu"
                        class="block text-base uppercase font-medium p-3 text-neutral-200 hover:text-primary-500 transition-colors">CONTACT</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/price" @click="closeMobileMenu"
                        class="block text-base uppercase font-medium p-3 text-neutral-200 hover:text-primary-500 transition-colors">PRICE</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </Transition>
      </Teleport>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';
import logoImage from "@/assets/images/logo.png";
import { Icon } from "@iconify/vue";
import { useUserStore } from "~/stores/user"; // Import user store
import Button from "~/components/ui/Button.vue"; // Import Button component

const userStore = useUserStore();
const isMobileMenuOpen = ref(false);

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Handler functions for buttons
const handleSignUp = () => {
  closeMobileMenu();
  navigateTo('/register-account');
};

const handleLogIn = () => {
  closeMobileMenu();
  navigateTo('/login');
};

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = '';
});

</script>

<style scoped>
/* Backdrop transition */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Sidebar transition */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
}

.sidebar-enter-to,
.sidebar-leave-from {
  transform: translateX(0);
}
</style>