<template>
  <div id="container">
    <nav class="w-100 flex items-center justify-between">
      <div class="flex items-center cursor-pointer" @click="$router.push('/')">
        <img src="/src/assets/lockio.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-4 text-xl font-bold">Lockio</span>
      </div>
    </nav>

    <div id="left-side">
      <div class="text-4xl mt-24 font-bold">Welcome back</div>
      <div class="text-xl mt-8 sm:w-full md:w-3/5">
        Veuillez renseigner vos informations de connexion
      </div>
      <div class="mt-8">
        <div class="flex flex-col sm:w-full md:w-2/5">
          <div class="flex flex-col">
            <label for="email" class="text-sm">Email</label>
            <input
              type="email"
              id="email"
              class="border border-gray-800 bg-white rounded-xl p-3 mt-2 text-gray-800"
              placeholder="tchoukdu12@toulouse.miage.fr"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label for="password" class="text-sm">Mot de passe</label>
            <input
              type="password"
              id="password"
              class="border border-gray-800 bg-white rounded-xl p-3 mt-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-gray"
              placeholder="*********"
            />
            <div class="text-sm mt-1 italic">Mot de passe oublié?</div>
          </div>
        </div>
        <div class="flex flex-col text-center items-center mt-8 md:w-2/5">
          <button
            @click="$router.push({ name: 'Lockios' })"
            class="bg-gray-700 hover:bg-gray-900 text-white rounded-xl p-3 w-1/2 text-center"
          >
            Se connecter
          </button>
          <div class="my-2">ou</div>
          <button
            class="bg-gray-700 hover:bg-gray-900 text-white rounded-xl p-3 w-1/2 text-center"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
    <!-- RIGHT SIDE WITH WHITE BACKGROUND -->
    <div id="right-side">
      <div
        class="hidden md:block md:w-2/5 lg:w-1/3 h-screen bg-white absolute top-0 right-0"
      >
        <div class="ml-14 mr-14">
          <div class="flex flex-col mt-44 text-3xl">
            <div>
              Des <span class="font-bold text-yellow-600">Lockios</span>,
            </div>
            <div>partout, tout le temps.</div>
          </div>
          <div class="mt-8">
            Connectez-vous pour accéder aux informations des Lockios et avoir la
            possibilité de réserver
            <span class="font-bold">gratuitement</span> le votre !
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#container {
  margin: 4vh 10vw 4vh 10vw;
}

#email {
  background-color: white !important;
}
</style>
