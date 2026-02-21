import { reactive } from 'vue';

// Global reactive store untuk dark mode
export const darkModeStore = reactive({
  isDark: false,
});

// Initialize dark mode state
export function initDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    darkModeStore.isDark = true;
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
    darkModeStore.isDark = false;
  } else {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      html.classList.add('dark');
      darkModeStore.isDark = true;
    } else {
      html.classList.remove('dark');
      darkModeStore.isDark = false;
    }
  }
}

// Toggle dark mode
export function toggleDarkMode() {
  const html = document.documentElement;
  darkModeStore.isDark = !darkModeStore.isDark;
  
  if (darkModeStore.isDark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Check current theme (for syncing)
export function checkDarkMode() {
  darkModeStore.isDark = document.documentElement.classList.contains('dark');
}
