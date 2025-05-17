// src/composables/useAuth.js
import { ref, readonly, computed } from 'vue';
import { useRouter } from 'vue-router';


const user = ref(null); 


const mockUsers = [
    { id: 1, name: 'Test User', email: 'test@example.com', password: 'password123' },
    { id: 2, name:'Bimo', email:"bimo@ks.com", password: 'test1980'},
    { id: 3, name:'Naufal', email:"naufal@ex.com", password: 'test1234'},
    { id: 4, name:'Abi', email:"abi@ex.com", password: 'test1235'}
];

export function useAuth() {
    const router = useRouter(); 

    const isAuthenticated = computed(() => !!user.value);

    
    async function login(email, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const foundUser = mockUsers.find(u => u.email === email && u.password === password);
                if (foundUser) {
                    user.value = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
                    
                    localStorage.setItem('authUser', JSON.stringify(user.value));
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, 1000);
        });
    }

    
    async function register(name, email, password) {
         return new Promise((resolve) => {
            setTimeout(() => {
                const existingUser = mockUsers.find(u => u.email === email);
                if (existingUser) {
                    resolve(false); 
                } else {
                    const newUser = { id: Date.now(), name, email, password };
                    mockUsers.push(newUser);
                    
                    console.log('Registered users:', mockUsers); 
                    resolve(true);
                }
            }, 1000);
        });
    }

  
    function logout() {
        user.value = null;
        localStorage.removeItem('authUser');
       
        router.push('/login'); 
    }

    
    function checkAuthStatus() {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            try {
                user.value = JSON.parse(storedUser);
            } catch (e) {
                localStorage.removeItem('authUser');
            }
        }
    }

    return {
        user: readonly(user), 
        isAuthenticated,
        login,
        register,
        logout,
        checkAuthStatus,
    };
}