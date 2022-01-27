<template>
  <div>
    <button
      class="
        p-2
        mx-2
        hover:bg-purple-300
        bg-purple-400
        border-4 border-purple-300
        rounded-2xl
      "
      type="button"
      @click="checkLogin"
    >
      確認是否登入
    </button>
    <button
      class="
        p-2
        mx-2
        hover:bg-purple-300
        bg-purple-400
        border-4 border-purple-300
        rounded-2xl
      "
      type="button"
      @click="getProducts"
    >
      取得後台的產品列表
    </button>
    <button
      class="
        p-2
        mx-2
        hover:bg-purple-300
        bg-purple-400
        border-4 border-purple-300
        rounded-2xl
      "
      type="button"
      @click="addProducts"
    >
      新增一個產品
    </button>
    <button
      class="
        p-2
        mx-2
        hover:bg-purple-300
        bg-purple-400
        border-4 border-purple-300
        rounded-2xl
      "
      type="button"
      @click="delProducts"
    >
      刪除一個產品
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "home",
  components: {},
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "david-hexschool",
      emailValue: "",
      passwordValue: "",
    };
  },
  created() {
    this.checkLogin();
  },
  mounted() {

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
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    checkLogin() {
      console.log("checkLogin");
      const tokenValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      // console.log(tokenValue)
      this.axios.defaults.headers.common["Authorization"] = tokenValue;

      this.axios
        .post(`${this.url}/api/user/check`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProducts() {
      this.axios
        .get(`${this.url}/api/${this.apiPath}/admin/products`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addProducts() {
      const product = {
        data: {
          title: "[賣]衣服",
          category: "衣服2",
          origin_price: 100,
          price: 300,
          unit: "個",
          description: "名設計師設計",
          content: "內容",
          is_enabled: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621e8231a4e714c2e85f5acbbcc6a730&auto=format&fit=crop&w=1352&q=80",
        },
      };
      this.axios
        .post(`${this.url}/api/${this.apiPath}/admin/product`, product)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delProducts() {
      this.axios
        .delete(
          `${this.url}/api/${this.apiPath}/admin/product/-Mts0xvpeSWRVjuKsgoU`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
