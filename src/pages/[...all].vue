<script setup lang="ts">
import { RouterLink } from 'vue-router'; 

// 可以在这里定义图片的路径，假设它在 public 目录下
const imageUrl = '/404.svg'; 
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    
    <div class="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
      
      <div class="flex-shrink-0 w-full md:w-1/2">
        <img 
          :src="imageUrl" 
          alt="404 Page Not Found Illustration" 
          class="w-full h-auto object-cover"
        />
      </div>
      
      <div class="flex-grow w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-7xl font-extrabold text-red-600 mb-4">
          404
        </h1>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          页面走丢了...
        </h2>
        <p class="text-gray-600 text-lg mb-8">
          抱歉，您访问的页面不存在，它可能已被删除、名称已更改或暂时不可用。
        </p>
        
        <RouterLink 
          to="/" 
          class="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg transition duration-200 hover:bg-blue-700 hover:shadow-xl"
        >
          返回首页
        </RouterLink>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* 可以在这里添加一些非原子化的 CSS，通常不需要 */
</style>