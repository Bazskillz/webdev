<template>
  <nav class="bg-gray-400 text-white rounded-full">
    <ul class="flex justify-center items-center py-4">
      <li class="mr-10">
        <router-link to="/" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          Home
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/about" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          About
        </router-link>
              </li>
      <li class="mr-10">
        <router-link to="/calendar" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          Calendar
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/login" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          Login
        </router-link>>
      </li>
      <li>
        <router-link to="/register" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          Register
        </router-link>
      </li>
    </ul>
  </nav>
</template>


<style scoped>

/* Add rounded edges */
li {
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Add border lighting on hover */
a:hover {
  border-color: #0E8388;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #0E8388;
}

/* Add styles to router-link tags */
.router-link-exact-active {
  border-color: #CBE4DE;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #CBE4DE;
  background-color: #CBE4DE;
  color: #2C3333;
}
.router-link-exact-active:hover {
  background-color: #CBE4DE;
  color: #2C3333;
}
</style>

<script>
export default {
    name: "navbar",
  };
</script>