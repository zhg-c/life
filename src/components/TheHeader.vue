<script setup lang="ts">
import { RouterLink } from 'vue-router';
// 假设这里可以导入你需要的图标库，例如 VueUse Icons

// 定义导航菜单数据
const menus = [
  { label: '仪表盘', link: '/dashboard', icon: 'i-carbon-dashboard' }, // 假设你使用 carbon 图标
  { label: '项目中心', link: '/projects', icon: 'i-carbon-folder' },
  { label: '数据分析', link: '/analytics', icon: 'i-carbon-analytics' },
  { label: '帮助与支持', link: '/support', icon: 'i-carbon-help' },
];

// 定义用户操作菜单，放在导航右侧
const userActions = [
  { label: '通知', link: '/notifications', icon: 'i-carbon-notification' },
];

// 假设用户登录状态，用于显示头像或登录按钮
const isLoggedIn = true; 

// 预留一个函数用于处理用户登出
const handleLogout = () => {
  console.log('用户已登出');
  // 实际的登出逻辑
};
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-white shadow-md dark:bg-gray-800">
    <div class="mx-auto max-w-screen-2xl flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      
      <div class="flex items-center space-x-4">
        <RouterLink to="/" class="flex items-center text-xl font-bold text-gray-900 dark:text-white">
          
          <img src="" alt="Logo" class="h-8 w-auto mr-3 hidden sm:block"> 
          
          <span class="text-blue-600">专业应用</span>
        </RouterLink>
      </div>
      
      <nav class="hidden lg:flex flex-grow justify-center">
        <ul class="flex space-x-8">
          <li v-for="menu in menus" :key="menu.label">
            <RouterLink 
              :to="menu.link" 
              class="flex items-center py-2 text-sm font-medium transition duration-150"
              :class="{ 
                'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600': $route.path.startsWith(menu.link),
                'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400': !$route.path.startsWith(menu.link)
              }"
            >
              <div :class="menu.icon" class="mr-1.5 text-lg" /> 
              {{ menu.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center space-x-4">
        
        <RouterLink 
          v-for="action in userActions" 
          :key="action.label"
          :to="action.link"
          class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 p-2 rounded-full transition duration-150"
          aria-label="Notifications"
        >
          <div :class="action.icon" class="text-xl" />
        </RouterLink>

        <div v-if="isLoggedIn" class="flex items-center space-x-2">
          <img src="" alt="User Avatar" class="h-8 w-8 rounded-full cursor-pointer">
          <button @click="handleLogout" class="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hidden sm:block">
            退出
          </button>
        </div>
        <RouterLink v-else to="/login" class="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150">
          登录
        </RouterLink>

        <button class="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600" aria-label="Open menu">
          <div class="i-carbon-menu text-xl" />
        </button>

      </div>
      
    </div>
  </header>
</template>