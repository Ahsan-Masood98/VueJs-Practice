<template>
  <div>
    <!-- v-if will only show the header when the $slots.header get some content in it-->
    <header v-if="$slots.header">
        <slot name="header">
            <!-- content inside slots will be treated as fallback content -->
            <!-- if header slot is used in some component but nothing gets inside it it will show the fallback content -->
            <h2>The Default</h2>
        </slot>
    </header>
      <slot></slot>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
