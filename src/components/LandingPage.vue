<script setup>
import BucketList from "./BucketList.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <Navbar>
    <template v-slot:menu>
      <li><a>Buckets</a></li>
      <li><a>Transactions</a></li>
    </template>

    <template v-slot:content>
      <div class="bg-base-200">
        <BucketList></BucketList>
      </div>
    </template>
  </Navbar>
</template>
