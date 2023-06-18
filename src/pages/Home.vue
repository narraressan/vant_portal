<script setup lang="ts">
import { showToast } from "vant";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
showToast(t("page.Home.welcome"));
</script>

<template>
  <van-grid :column-num="1">
    <van-grid-item>
      {{ t("page.Home.title") }}
    </van-grid-item>
  </van-grid>
</template>
