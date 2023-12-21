<template>
    <div class="form-container">
        <form @submit.prevent="register" class="form">
            <input class="github-input" type="text" v-model="firstName" placeholder="First Name" required>
            <input class="github-input" type="text" v-model="lastName" placeholder="Last Name" required>
            <input class="github-input" type="email" v-model="email" placeholder="Email" required>
            <input class="github-input" type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { AxiosInstance } from 'axios';

const axios: AxiosInstance = inject('axios');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

const register = async () => {
    try {
        const response = await axios.post('auth/register', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        });
        console.log(response)
    } catch (error) {
        // Handle registration error
    }
};
</script>
<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form {
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 10px;
}

input[type=text],
input[type=email],
input[type=password] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px;
    border: none;
    background-color: #2ea44f;;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #2c974b;
}
</style>