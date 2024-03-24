<template>
  <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper" @click.stop>
        <div class="modal-container">
          <button class="modal-close"  type="button"
          @click="close">&times;</button>
          <img src="../assets/CV-Programmer.png" alt="Modal Image" class="modal-image">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  width: 100%;
  max-width: 550px;
}

.modal-container {
  position: relative;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  border: none;
  background: none;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
}
</style>
