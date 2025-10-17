<script setup lang="ts">
import { RouterLink } from 'vue-router';

// 页脚的导航链接数据（通常是法律、关于我们等）
const footerLinks = [
  { label: '关于我们', link: '/about' },
  { label: '隐私政策', link: '/privacy' },
  { label: '服务条款', link: '/terms' },
  { label: '联系我们', link: '/contact' },
];

// 社交媒体图标链接 (使用 UnoCSS 图标类预留)
const socialLinks = [
  { icon: 'i-carbon-logo-github', href: 'https://github.com/your-repo' },
  { icon: 'i-carbon-logo-twitter', href: 'https://twitter.com/your-handle' },
  { icon: 'i-carbon-logo-linkedin', href: 'https://linkedin.com/in/your-profile' },
];

// 获取当前年份用于版权声明
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        
        <div class="col-span-2 md:col-span-1 lg:col-span-2 space-y-3">
          <RouterLink to="/" class="flex items-center text-xl font-bold text-gray-900 dark:text-white">
            <img src="" alt="Logo" class="h-6 w-auto mr-2"> 
            <span class="text-blue-600">专业应用</span>
          </RouterLink>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            赋能您的未来，简化您的工作流。
          </p>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            产品
          </h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/features" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">功能概览</RouterLink></li>
            <li><RouterLink to="/pricing" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">定价方案</RouterLink></li>
            <li><RouterLink to="/careers" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">加入我们</RouterLink></li>
          </ul>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            资源
          </h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks" :key="link.label">
              <RouterLink :to="link.link" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
        
        <div class="space-y-4 col-span-2 md:col-span-1">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            关注我们
          </h3>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.href" 
              :href="social.href" 
              target="_blank" 
              class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition"
              aria-label="Social link"
            >
              <div :class="social.icon" class="text-xl" />
            </a>
          </div>
          <p class="text-sm text-gray-500 pt-2">邮箱: support@app.com</p>
        </div>

      </div>
      
      <div class="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ currentYear }} 您的公司名称. 保留所有权利.
        </p>
      </div>
      
    </div>
  </footer>
</template>