<script setup>
import { useDatabase, useDatabaseList } from "vuefire";
import { ref as dbRef, query, orderByChild } from "firebase/database";

const db = useDatabase();
const buckets = useDatabaseList(
  query(dbRef(db, "/buckets"), orderByChild("order"))
);
</script>

<template>
  <ol>
    <li v-for="bucket in buckets" :key="bucket.id">
      <b>{{ bucket.id }}</b
      >: {{ JSON.stringify(bucket) }}
    </li>
  </ol>

  <ul>
    <li v-for="i in 100" :key="i">{{ i }}</li>
  </ul>
</template>
