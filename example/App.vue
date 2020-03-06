<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

@media screen and (max-width:400px) {html {font-size: 10px;}}
@media screen and (min-width:400px) and (max-width:479px) {html {font-size: 12px;}}
@media screen and (min-width:480px) and (max-width:639px) {html {font-size: 15px;}}
@media screen and (min-width:640px) and (max-width:719px) {html {font-size: 20px;}}
@media screen and (min-width:720px) and (max-width:749px) {html {font-size: 22.5px;}}
@media screen and (min-width:750px) and (max-width:799px) {html {font-size: 23.5px;}}
@media screen and (min-width:800px) and (max-width:959px) {html {font-size: 25px;}}
@media screen and (min-width:960px) and (max-width:1079px) {html {font-size: 30px;}}
@media screen and (min-width:1080px) {html {font-size: 32px;}}
</style>
