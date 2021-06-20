<template>
  <aside class="app__sidebar">
    <section class="app__sidebar__brand">
      <span class="app__sidebar__brand__logo">
        <IconSpotify />
      </span>
    </section>
    <section class="app__sidebar__section">
      <div class="app__sidebar__section__title">Spotify</div>
      <ul class="app__sidebar__nav">
        <li>
          <RouterLink :to="{ name: 'Home' }" class="active">
            <IconHome />
            <span>Home</span>
          </RouterLink>
        </li>
        <li>
          <a href="#!">
            <IconDiscover />
            <span>Discover</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <IconRadio />
            <span>Radio</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="app__sidebar__section">
      <div class="app__sidebar__section__title">Library</div>
      <ul class="app__sidebar__nav">
        <li>
          <RouterLink :to="{ name: 'LibrarySongs' }">
            <IconList />
            <span>Songs</span>
          </RouterLink>
        </li>
        <li>
          <a href="#!">
            <IconPerson />
            <span>Artists</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <IconFolder />
            <span>Albums</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="app__sidebar__section">
      <div class="app__sidebar__section__title">Playlists</div>
      <ul class="app__sidebar__nav">
        <li>
          <a href="#!">
            <IconPlus />
            <span>Create New</span>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'LibrarySongs' }">
            <IconHeart />
            <span>Liked Songs</span>
          </RouterLink>
        </li>
        <li>
          <a href="#!">
            <IconDocumentText />
            <span>R&amp;B</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <IconDocumentText />
            <span>Pop Songs</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="app__sidebar__section mt-auto">
      <div class="app__sidebar__section__title">General</div>
      <ul class="app__sidebar__nav">
        <li>
          <a href="#!">
            <IconSettings />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <IconLogOut />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>
