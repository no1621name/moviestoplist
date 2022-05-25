<template>
  <div
    :class="['notify-wrap', messagePool.variant]"
    :key="notificationId"
    :id="`notify${notificationId}`"
  >
    <template v-if="messagePool.isVisible">
      <BIconX class="close" @click="onCloseNotify"/>
      <div class="notify-main">
        <div class="notify-title">
          {{ messagePool.title }}
        </div>
        <div class="notify-body">
          {{ messagePool.msg }}
          <BButton
            :variant="messagePool.variant"
            class="notify-submit"
            @click="onCloseNotify"
          >Ok</BButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notification',
  computed: {
    ...mapGetters(['messagePool', 'logs']),
    notificationId() {
      return this.logs.indexOf(this.messagePool);
    },
  },
  methods: {
    onCloseNotify() {
      document.querySelector(`#notify${this.notificationId}`)
        .classList.remove(this.messagePool.variant);
      this.messagePool.isVisible = !this.messagePool.isVisible;
      if (this.messagePool.variant === 'danger') console.log(this.logs);
    },
    autoHide() {
      console.log('asfd');
      setTimeout(() => {
        console.log('5 sec');
        if (this.messagePool.isVisible) {
          this.onCloseNotify();
        }
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.notify-wrap{
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  background: #fff;
  border-radius: 3px;
  min-width: max-content;
  .close{
    cursor: pointer;
    font-size: 20px;
    background: transparent;
    color: #a3a3a3;
    border: none;
    position: absolute;
    top: 3px;
    right: 10px;
  }
  .notify-title{
    font-size: 20px;
    padding:10px;
  }
  .notify-body{
    padding: 10px;
    .notify-submit{
      margin-left: 10px;
    }
  }
  &.danger{
    border: 2px solid #f3cfd3;
    .notify-title{
      color: #86333a;
      background: #f8ddde;
    }
    .notify-body{
      color: #86333a;
      background: #fceeef;
    }
  }
  &.success{
    border: 2px solid #cce9d3;
    .notify-title{
      color: #145725;
      background: #d6efdc;
    }
    .notify-body{
      color: #145725;
      background: #e7f5e8;
    }
  }
}
</style>
