<template>
    <div class="app-loader">
      <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
  .app-loader{
    margin-left: calc(50vw - 25px);
    padding-top: calc(50vh - 25px);
  }
</style>