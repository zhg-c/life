<script setup lang="ts">
// 假设这是首页，我们不需要太多脚本，保持简洁
</script>

<route lang="yaml">
meta:
  layout: layout 
</route>

<template>
  <div class="p-4 sm:p-8 lg:p-12 min-h-[80vh]">
    
    <div class="mx-auto max-w-5xl text-center pt-16 md:pt-24 lg:pt-32">
      
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        释放您的潜力<br class="hidden sm:inline">
        <span class="text-blue-600 dark:text-blue-400">简化复杂工作流</span>
      </h1>
      
      <p class="mt-4 sm:mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        一款专为高效团队设计的应用。通过强大的数据分析和自动化工具，让您的业务更上一层楼。
      </p>
      
      <div class="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        <RouterLink 
          to="/dashboard" 
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 transform hover:scale-105"
        >
          立即开始使用
        </RouterLink>
        
        <RouterLink 
          to="/features" 
          class="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150"
        >
          查看全部功能
        </RouterLink>
      </div>
    </div>
    
    <div class="mt-16 md:mt-24">
      <div class="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl shadow-inner flex items-center justify-center text-gray-500">
        [ 产品截图或特色插画展示区域 ]
      </div>
    </div>
    
  </div>
</template>