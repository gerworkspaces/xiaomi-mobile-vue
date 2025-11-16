<template>
  <footer class="bg-[#1a1a1a] text-white">
    <!-- Top Section -->
    <div class="container mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- ABOUT US -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">ABOUT US</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-[#ffc700] text-white">Company Details</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Terms & Conditions</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Affiliate</a></li>
          </ul>
        </div>

        <!-- HELP -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">HELP</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-[#ffc700] text-white">F.A.Q (Frequently Asked Questions)</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">AML/KYC Policy</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Refund Policy</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Dispute Resolution</a></li>
          </ul>
        </div>

        <!-- OUR PRODUCTS -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">OUR PRODUCTS</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-[#ffc700] text-white">Product</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Contact</a></li>
            <li><a href="#" class="hover:text-[#ffc700] text-white">Price</a></li>
            <li><a href="#" class="hover:text-[#FFC700] text-white">Sales</a></li>
          </ul>
        </div>

        <!-- CONTACT US -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">CONTACT US</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <Icon icon="mdi:email" class="w-5 h-5 mr-2 text-[#ffc700]" />
              <a href="mailto:support@xiaomi.email" class="hover:text-[#ffc700] text-white">support@xiaomi.email</a>
            </div>
            <div class="flex items-center">
              <Icon icon="mdi:email" class="w-5 h-5 mr-2 text-[#ffc700]" />
              <a href="mailto:affiliate@xiaomi.com" class="hover:text-[#ffc700] text-white">affiliate@xiaomi.com</a>
            </div>
            <div class=" h-full w-full py-2 rounded-md flex items-center mt-4">
              <img src="/assets/images/footer/install-app.png" class="w-[180px] h-full mr-2" />
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Section -->
      <div class="border-t border-gray-700 mt-12 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
            <div class="px-2 py-1 rounded mr-2">
              <img src="/assets/images/footer/18plus.png" alt="">
            </div>
            <span class="px-2 py-1 rounded">
              <img src="/assets/images/footer/secure_ssl_encryption.png" alt="">
            </span>
            <div class="text-sm text-gray-400 text-center md:text-right">
              <p>For designated models of Xiaomi smartphone, you can enjoy the warranty services for your device at
                designated Xiaomi.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-700 mt-8 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400 mb-4 md:mb-0">© Copyright 2025. All Rights Reserved</p>
          <div class="flex space-x-4">
            <span class="text-gray-400">We accept:</span>
            <div class="flex space-x-2">
              <span class="bg-white p-1 rounded">VISA</span>
              <span class="bg-white p-1 rounded">Mastercard</span>
              <span class="bg-white p-1 rounded">AstroPay</span>
              <span class="bg-white p-1 rounded">[Other]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* Custom styles if needed */
</style>