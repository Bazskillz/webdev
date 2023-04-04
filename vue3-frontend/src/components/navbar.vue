<template>
  <nav class="bg-gray-600 text-white rounded-full">
    <ul class="flex justify-center items-center py-4">
      <li class="mr-10">
        <router-link to="/" class="font-bold hover:border-yellow-400 hover:border-solid hover:border-2 hover:rounded-lg hover:shadow-md hover:bg-yellow-400 hover:text-black-900 p-2 text-gray-300 hover:text-black">
          Home
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/about" class="font-bold hover:border-yellow-400 hover:border-solid hover:border-2 hover:rounded-lg hover:shadow-md hover:bg-yellow-400 hover:text-black-900 p-2 text-gray-300 hover:text-black">
          About
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/login" class="font-bold hover:border-yellow-400 hover:border-solid hover:border-2 hover:rounded-lg hover:shadow-md hover:bg-yellow-400 hover:text-black-900 p-2 text-gray-300 hover:text-black">
          Login
        </router-link>
      </li>
      <li>
        <router-link to="/register" class="font-bold hover:border-yellow-400 hover:border-solid hover:border-2 hover:rounded-lg hover:shadow-md hover:bg-yellow-400 hover:text-black-900 p-2 text-gray-300 hover:text-black">
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
  border-color: #FBBF24;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #FBBF24;
}

/* Add styles to router-link tags */
.router-link-exact-active {
  border-color: #FBBF24;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #FBBF24;
  background-color: #FBBF24;
  color: #1a202c;
}
.router-link-exact-active:hover {
  background-color: #FBBF24;
  color: #1a202c;
}
</style>

<script>
export default {
    name: "navbar",
  };
</script>
