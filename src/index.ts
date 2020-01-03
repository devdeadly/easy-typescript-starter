const arr: string[] = ['easy', 'typescript', 'starter'];

const app: HTMLElement | null = document.getElementById('app');

if (app) {
  app.innerHTML = arr.join(' ');
}
