<script>
import { useRouter } from 'vue-router';
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const router = useRouter();

    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    return {
      navigateTo,
    };
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <router-view />
    </main>      
    <Toastify.ToastContainer />
    <AppFooter />
  </div>
</template>