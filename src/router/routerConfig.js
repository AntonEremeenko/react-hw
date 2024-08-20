import routeNames from './/routeNames';
import HomePage from '../pages/HomePage';
import TodoItemPage from '../pages/TodoItemPage';
import AllTodosPage from '../pages/AllTodosPage';
import NotFoundPage from '../pages/NotFoundPage';

const pagesRoutesConfig = [

    {
        path: routeNames.homePage,
        component: HomePage,
    },
    {
        path: routeNames.todoItemPage,
        component: TodoItemPage,
    },
    {
        path: routeNames.allTodosPage,
        component: AllTodosPage,
    },
    {
        path: routeNames.notFoundPage,
        component: NotFoundPage,
    },
];

export default pagesRoutesConfig;