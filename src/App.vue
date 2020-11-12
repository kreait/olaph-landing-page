<template>
  <div id="app">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="https://olaph.io"
        >
          <img
            src="@/assets/olaph_owl.svg"
            width="35"
          />
          <h1>Olaph<em> - Your friendly Stand-up Owl</em></h1>
        </a>
      </div>
    </nav>
    <router-view />
    <footer class="footer has-background-white">
      <div class="content has-text-centered">
        <p>
          <router-link to="/imprint">Privacy Policy</router-link>
        </p>
        <p>
          <strong>Olaph</strong> was fabricated by <a
            class="has-text-link"
            target="_blank"
            href="https://kreait.com"
          >kreait</a><br />
        </p>
        <p>
          <a
            class="bd-tw-button button is-primary"
            href="https://twitter.com/Olaph_io"
            target="_blank"
          >
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import bulma from 'bulma'
import Vue from 'vue'

Vue.use(bulma);

export default {}
</script>

<style lang="scss">
$primary: #73c4bc;
$info: #d0e9e5;
$link: #31b5aa;
@import "~bulma/bulma";

strong {
  color: #31b5aa;
  font-weight: 100;
  font-family: "Fredoka One", cursive;
}

em {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.navbar-menu {
  display: flex !important;
  box-shadow: none;
  min-height: 4em;
}

.navbar-item {
  font-weight: bold;
}

.round-edges {
  border-radius: 10px;
}
.has-shadow {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Fredoka One", cursive;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5 {
  font-weight: 100;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar-dropdown {
  left: calc(-100% + 4px);
}

.ws-margin {
  margin-left: 10%;
  margin-right: 10%;
}

.subtitle .is-6 {
  margin-top: -4%;
}

.notification {
  z-index: 2;
  top: 80%;
  bottom: 20%;
  left: 10%;
  right: 90%;
}

$sizeUnit: rem;
$marginKey: "m";
$paddingKey: "p";
$separator: "-";
$sizes: (
  ("none", 0),
  ("xxs", 0.125),
  ("xs", 0.25),
  ("sm", 0.5),
  ("md", 1),
  ("lg", 2),
  ("xl", 4),
  ("xxl", 8)
);

$positions: (("t", "top"), ("r", "right"), ("b", "bottom"), ("l", "left"));
@function sizeValue($key, $value) {
  @return if($key == "none", 0, $value + $sizeUnit);
}

@each $size in $sizes {
  $sizeKey: nth($size, 1);
  $sizeValue: nth($size, 2);
  .#{$marginKey}#{$separator}#{$sizeKey} {
    margin: sizeValue($sizeKey, $sizeValue);
  }
  .#{$paddingKey}#{$separator}#{$sizeKey} {
    padding: sizeValue($sizeKey, $sizeValue);
  }
  @each $position in $positions {
    $posKey: nth($position, 1);
    $posValue: nth($position, 2);
    .#{$marginKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      margin-#{$posValue}: sizeValue($sizeKey, $sizeValue);
    }
    .#{$paddingKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      padding-#{$posValue}: sizeValue($sizeKey, $sizeValue);
    }
  }
}
</style>
