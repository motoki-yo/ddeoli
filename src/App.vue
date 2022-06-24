<template>
    <app-navbar/>
    <router-view/>
    <app-footer/>
</template>

<script>
    import AppNavbar from '@/components/AppNavbar.vue'
    import AppFooter from '@/components/AppFooter.vue'

export default {
    components: {
        AppNavbar,
        AppFooter
    }
}
</script>