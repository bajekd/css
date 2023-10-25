const theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme('light-theme');
} else {
  setTheme(theme);
}
const themeDots = document.querySelectorAll('.theme-dot');

themeDots.forEach((themeDot) => {
  themeDot.addEventListener('click', (e) => {
    const theme = e.currentTarget.id;
    setTheme(theme);
  });
});

function setTheme(theme) {
  if (theme === 'light-theme') {
    document.querySelector('#theme-style').href = 'css/main.css';
  }
  if (theme === 'blue-theme') {
    document.querySelector('#theme-style').href = 'css/blue_theme.css';
  }
  if (theme === 'green-theme') {
    document.querySelector('#theme-style').href = 'css/green_theme.css';
  }
  if (theme === 'purple-theme') {
    document.querySelector('#theme-style').href = 'css/purple_theme.css';
  }

  localStorage.setItem('theme', theme);
}
