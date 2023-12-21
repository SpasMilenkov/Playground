<script setup lang="ts">
import { inject, ref } from 'vue';
import LoginForm from './components/LoginComponent.vue';
import RegisterForm from './components/RegisterComponent.vue';
import { AxiosInstance } from 'axios';

const axios: AxiosInstance | undefined = inject('axios');

const showLoginForm = ref(true);

const toggleForm = () => {
  showLoginForm.value = !showLoginForm.value;
};
const testUser = async () => {
  try {
    const response = await axios.get('user')
    console.log(response);
  } catch (error) {
    // Handle login error
  }
};
const testAdmin = async () => {
  try {
    const response = await axios.get('admin')
    console.log(response);
  } catch (error) {
    // Handle login error
  }
};
const refresh = async () => {
  try {
    const response = await axios.post('auth/refresh')
    console.log(response)

  } catch (error) {

  }
}
const logout = async () => {
  try {
    const response = await axios.post('auth/logout')
    console.log(response)

  } catch (error) {

  }
}
</script>

<template>
  <div class="form-container">
    <div class="button-container">
      <button class="button" @click="toggleForm">
        {{ showLoginForm ? 'Register' : 'Login' }}
      </button>
      <button class="button" @click="testUser">Test user</button>
      <button class="button" @click="testAdmin">Test admin</button>
      <button class="button" @click="refresh">Refresh token</button>
      <button class="button" @click="logout">Logout</button>
    </div>
    <LoginForm v-if="showLoginForm" />
    <RegisterForm v-else />
  </div>
</template>

<style scoped>
.form-container {
  text-align: center;
}

.button {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  min-width: 8rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button:hover {
  background-color: #2c974b;
}

.button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

button:hover {
  background-color: #e0e0e0;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>

