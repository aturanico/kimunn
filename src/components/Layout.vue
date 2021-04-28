<template>
    <div>
        <Carrusel />
        <Card />
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'Layout',
    components: {
      'Carrusel': require('@/components/Carrusel/Carrusel.vue').default,
      'Card': require('@/components/Card/Card.vue').default,
      'Footer': require('@/components/Footer/Footer.vue').default
    }

}
</script>

<style>

</style>