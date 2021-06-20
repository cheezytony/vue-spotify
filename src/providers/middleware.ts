import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';
import middlewares from '@/middlewares';

export type Middleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router
) => boolean;

export const getMiddleware = (middlewareName: string): Middleware | null => {
  const { registry } = middlewares;
  return (registry as { [key: string]: Middleware })[middlewareName];
}

export const init = (router: Router): void => {
  router.beforeEach((
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
    ): void => {
      const { middlewares = [] } = to.meta;
      const allowNavigation = (middlewares as string[]).every((middlewareName: string) => {
        const middleware = getMiddleware(middlewareName);

        return !middleware ? false : middleware(to, from, next, router);
      })

      if (allowNavigation) {
        next();
      }
    }
  );
};
