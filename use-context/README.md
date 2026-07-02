##Шаг 1: Создаем (Нужен только createContext)
#Мы просто создаем пустую «розетку» для данных пользователя и называем её UserContext.

JavaScript
import { createContext } from 'react';

#Шаг 1: Просто создали контекст. Больше этот файл ничего не делает.
#export const UserContext = createContext(null);
#Шаг 2: Подготавливаем App для передачи (Нужен .Provider)
#В компоненте App мы создаем реальные данные (например, стейт с объектом пользователя) и «подключаем» их к нашей розетке через .Provider в проп value.


import { useState } from 'react';
import { UserContext } from './UserContext'; // Импортируем нашу розетку
import Dashboard from './Dashboard';       // Промежуточный компонент

export default function App() {
  // Реальные данные, которые мы подготовили для передачи
  const [user, setUser] = useState({ name: "Алексей", role: "Админ" });

  return (
    // Шаг 2: Оборачиваем всё в Провайдер и передаем данные в value
    <UserContext.Provider value={user}>
      <div style={{ padding: '20px', border: '2px solid blue' }}>
        <h1>Главный компонент (App)</h1>
        
        {/* Рендерим панель управления. Пропсы ей НЕ передаем! */}
        <Dashboard /> 
      </div>
    </UserContext.Provider>
  );
}

#Промежуточный компонент-посредник. Ему данные юзера не нужны.
function Dashboard() {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid gray' }}>
      <h2>Панель управления (Dashboard)</h2>
      {/* Рендерим конечную кнопку профиля */}
      <ProfileCard />
    </div>
  );
}
##Шаг 3: Получаем в конечном компоненте (Нужен useContext)
#Вот тут, в самом глубоком компоненте ProfileCard, нам наконец-то понадобились имя и роль пользователя. Мы используем хук useContext, чтобы «подключиться» к розетке UserContext, которую #мы активировали в App.

##JavaScript
import { useContext } from 'react';
import { UserContext } from './UserContext'; // Импортируем ту же самую розетку

function ProfileCard() {
  // Шаг 3: Используем хук useContext, чтобы ПОЛУЧИТЬ данные напрямую из App
  const user = useContext(UserContext);

  return (
    <div style={{ padding: '15px', backgroundColor: '#e0f7fa', color: '#000' }}>
      <h3>Карточка профиля (Получатель)</h3>
      <p>Имя пользователя: <b>{user.name}</b></p>
      <p>Роль на сайте: <b>{user.role}</b></p>
    </div>
  );
}
#Конечная схема в твоей голове:
#createContext — создал абстрактный канал связи UserContext.
#App — взял этот UserContext, превратил его в <UserContext.Provider>, положил туда живой объект { name: "Алексей", role: "Админ" } и накрыл этим куполом всё приложение.
#Dashboard — просто отрендерился, пропустив данные сквозь себя (ему всё равно).
#ProfileCard — сказал: useContext(UserContext), залез под купол и забрал объект с Алексеем напрямую. Схема замкнулась!


/////////////////////////////////////////////////////////////////
##1. Создаем изолированный Провайдер (UserContext.jsx)
#Мы убираем стейт из App и переносим его сюда. И используем children.


import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Алексей", role: "Админ" });

  return (
    <UserContext.Provider value={user}>
      {children} {/* Сюда встанет Dashboard */}
    </UserContext.Provider>
  );
}
##2. В App мы просто красиво их соединяем

import { UserProvider } from './UserContext';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <UserProvider>
      <Dashboard /> {/* Передаем Dashboard как children! */}
    </UserProvider>
  );
}
##3. Dashboard и ProfileCard остаются почти такими же

#Dashboard (Посредник)
function Dashboard() {
  console.log("Dashboard рендерится?"); // Теперь этот лог сработает ТОЛЬКО 1 РАЗ при старте!
  return (
    <div>
      <h2>Панель управления</h2>
      <ProfileCard />
    </div>
  );
}

#ProfileCard (Получатель)
import { useContext } from 'react';
import { UserContext } from './UserContext';

function ProfileCard() {
  const user = useContext(UserContext); // Забирает напрямую
  return <h3>Привет, {user.name}!</h3>;
}

#Что изменилось в работе?
#Теперь, когда стейт внутри UserProvider изменится:
#UserProvider перерисовывается.
#Он видит, что Dashboard пришел к нему снаружи как готовый проп children. React знает: «Если children создан не мной внутри, значит его пропсы не менялись, я его пропускаю».
#Dashboard НЕ рендерится.
#А ProfileCard все равно рендерится, потому что хук useContext внутри него напрямую связан с Провайдером.
#Вот теперь схема идеальна: данные передаются без пропсов, а промежуточный Dashboard защищен от лишней работы!