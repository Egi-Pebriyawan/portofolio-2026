// Simple dark mode composable dengan proper reactivity
import { ref, watch } from 'vue';

// Global state - HARUS di luar function agar shared
const isDarkGlobal = ref(false);

export function useDarkMode() {
  // Initialize once
  const init = () => {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme === 'dark') {
      html.classList.add('dark');
      isDarkGlobal.value = true;
    } else if (savedTheme === 'light') {
      html.classList.remove('dark');
      isDarkGlobal.value = false;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        html.classList.add('dark');
        isDarkGlobal.value = true;
      }
    }
  };

  const toggle = () => {
    const html = document.documentElement;
    isDarkGlobal.value = !isDarkGlobal.value;
    
    if (isDarkGlobal.value) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    console.log('Dark mode toggled:', isDarkGlobal.value);
  };

  return {
    isDark: isDarkGlobal,
    toggle,
    init
  };
}
