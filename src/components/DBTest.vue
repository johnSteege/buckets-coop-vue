<script setup>
import { useDatabase, useDatabaseList } from "vuefire";
import { ref as dbRef, query, orderByChild } from "firebase/database";

const db = useDatabase();
const buckets = useDatabaseList(query(dbRef(db, "/buckets"), orderByChild("order")));
</script>

<template>
  <div>
    <div v-for="bucket in buckets" :key="bucket.id">
      Bucket: {{ JSON.stringify(bucket) }}
    </div>
  </div>
</template>
