<template>
  <div id="app">
    <div class="row">
      <sx-button>默认按钮</sx-button>
      <sx-button type="primary">主要按钮</sx-button>
      <sx-button type="secondary">次要按钮</sx-button>
      <sx-button type="accent">重点按钮</sx-button>
      <sx-button type="ghost">幽灵按钮</sx-button>
      <sx-button type="link">链接按钮</sx-button>
    </div>
    <div class="row">
      <sx-button outline>朴素按钮</sx-button>
      <sx-button outline type="primary">主要按钮</sx-button>
      <sx-button outline type="secondary">次要按钮</sx-button>
      <sx-button outline type="accent">重点按钮</sx-button>
    </div>
    <div class="row">
      <sx-button round>圆角按钮</sx-button>
      <sx-button round type="primary">主要按钮</sx-button>
      <sx-button round type="secondary">次要按钮</sx-button>
      <sx-button round type="accent">重点按钮</sx-button>
    </div>
    <div class="row">
      <sx-button circle>我</sx-button>
      <sx-button circle type="primary">是</sx-button>
      <sx-button circle type="secondary">圆</sx-button>
      <sx-button circle type="accent">形</sx-button>
    </div>
    <div class="row">
      <sx-button disabled>默认按钮</sx-button>
      <sx-button disabled type="primary">主要按钮</sx-button>
      <sx-button disabled type="secondary">次要按钮</sx-button>
      <sx-button disabled type="accent">重点按钮</sx-button>
    </div>
    <div class="row">
      <sx-button disabled outline type="primary">主要按钮</sx-button>
      <sx-button disabled outline type="secondary">次要按钮</sx-button>
      <sx-button disabled outline type="accent">重点按钮</sx-button>
    </div>
    <div class="row">
      <sx-button type="info">提示</sx-button>
      <sx-button type="success">成功</sx-button>
      <sx-button type="warning">警告</sx-button>
      <sx-button type="danger">危险</sx-button>
    </div>
    <div class="row">
      <sx-button>默认按钮</sx-button>
      <sx-button size="medium">中等按钮</sx-button>
      <sx-button size="small">小型按钮</sx-button>
      <sx-button size="mini">超小按钮</sx-button>
    </div>
    <div class="row">
      <sx-button round>默认按钮</sx-button>
      <sx-button size="medium" round>中等按钮</sx-button>
      <sx-button size="small" round>小型按钮</sx-button>
      <sx-button size="mini" round>超小按钮</sx-button>
    </div>
    <div class="row red">
      <sx-button glass>默认按钮</sx-button>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.row {
  margin-bottom: 10px;
  display: flex;
}
</style>