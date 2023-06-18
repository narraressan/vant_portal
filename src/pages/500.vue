<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <van-grid :column-num="1">
    <van-grid-item>
      {{ t("page.500.title") }}
    </van-grid-item>
  </van-grid>
</template>
