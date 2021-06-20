import { getItem } from '@/plugins/local-storage';
import { Router } from 'vue-router';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

type AuthData = {
  access_token: string,
}

export default  (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router
): boolean => {
  const data = <AuthData>getItem('spotify-user');
  if (!data) {
    next({ name: 'Login' });
    return false;
  }

  const { app } = router;
  app.$spotify.setAccessToken(data.access_token);

  return true;
};
