  <template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center">
      <h1 class="text-xl mb-3">請先登入</h1>
      <div class="">
        <form id="form" class="">
          <div class="flex justify-center items-center mb-3">
            <label for="username" class="mr-2">Email address</label>
            <input
              type="email"
              class="px-2 py-1 text-lg"
              v-model="emailValue"
              placeholder="name@example.com"
              required
              autofocus
            />
          </div>
          <div class="flex justify-center items-center">
            <label for="password" class="mr-9">Password</label>
            <input
              type="password"
              class="px-2 py-1 text-lg"
              v-model="passwordValue"
              placeholder="Password"
              required
            />
          </div>
          <button
            class="
              hover:bg-red-400
              bg-blue-600
              text-white
              py-2
              px-6
              rounded-lg
              m-5
            "
            type="button"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "david-hexschool",
      emailValue: "",
      passwordValue: "",
    };
  },
  created() {
  },
  methods: {
    login() {
      const username = this.emailValue;
      const password = this.passwordValue;
      // eslint-disable-next-line no-unused-vars
      const user = {
        username,
        password,
      };
      this.axios
        .post(`${this.url}/admin/signin`, user)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          this.$router.push("/week2/product");
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
  text-align: center;
}
</style>