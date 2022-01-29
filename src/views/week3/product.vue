<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <div class="w-5/6 flex flex-col justify-center items-center">
      <div class="">
        <div class="flex justify-between items-center mb-2">
          <div></div>
          <h2 class="text-2xl">產品列表</h2>
          <button
            class="text-white text-xl bg-blue-500 p-2 rounded-xl"
            @click="addProducts"
          >
            建立新產品
          </button>
        </div>
        <table class="border-4 border-gray-800 bg-white">
          <thead class="border-b-4 border-gray-800">
            <tr>
              <th width="150">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="120">是否啟用</th>
              <th width="120">查看細節</th>
              <th width="150">編輯/刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="value in productsList"
              :key="value.id"
              class="border-b border-gray-400 text-lg"
            >
              <td width="150">{{ value.title }}</td>
              <td width="120">
                {{ value.origin_price }}
              </td>
              <td width="120">
                {{ value.price }}
              </td>
              <td width="120">
                <span v-if="value.is_enabled" class="text-green-600">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td width="120">
                <button
                  @click="getProductInfo(value)"
                  type="button"
                  class="text-blue-500"
                >
                  查看細節
                </button>
              </td>
              <td width="150">
                <button
                  @click="getProductInfo(value)"
                  type="button"
                  class="
                    text-white
                    bg-blue-500
                    hover:bg-blue-700
                    p-2
                    mx-3
                    rounded-xl
                  "
                >
                  編輯
                </button>
                <button
                  @click="delProduct(value.id)"
                  type="button"
                  class="text-white bg-red-400 hover:bg-red-600 p-2 rounded-xl"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-xl">
          目前有
          <span class="text-red-500">{{ productsList.length }}</span> 項產品
        </p>
      </div>
      <div class="">
        <h2>單一產品細節</h2>
        <template v-if="productInfo.title">
          <div class="">
            <img :src="productInfo.imageUrl" class="w-80 mx-auto" alt="主圖" />
            <div class="">
              <h5 class="">
                {{ productInfo.title }}
                <span class="">{{ productInfo.category }}</span>
              </h5>
              <p class="">商品描述：{{ productInfo.description }}</p>
              <p class="">商品內容：{{ productInfo.content }}</p>
              <div class="flex justify-center items-center">
                <p class="mx-2 text-xl text-red-500">
                  特價:{{ productInfo.price }}元
                </p>
                <p class="">
                  <del>{{ productInfo.origin_price }}</del>
                </p>
                {{ productInfo.unit }} / 元
              </div>
            </div>
          </div>
          <template v-for="value in productInfo.imagesUrl">
            <img :src="value" alt="" class="w-60 flex mx-auto m-1" />
          </template>
        </template>
        <p v-else class="">請選擇一個商品查看</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "week3product",
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "week3-productlist",
      productsList: [],
      productInfo: {
        title: "",
        imageUrl: "",
        imagesUrl: [],
        category: "",
        description: "",
        price: 0,
        origin_price: 0,
        unit: "",
      },
    };
  },
  mounted() {
    this.checkLogin();
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
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
          alert("狀態異常");
          this.$router.push("/week2/login");
        });
    },
    getProducts() {
      this.axios
        .get(`${this.url}/api/${this.apiPath}/admin/products`)
        .then((res) => {
          console.log(res);
          this.productsList = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProductInfo(value) {
      this.productInfo.title = value.title;
      this.productInfo.imageUrl = value.imageUrl;
      this.productInfo.category = value.category;
      this.productInfo.description = value.description;
      this.productInfo.content = value.content;
      this.productInfo.price = value.price;
      this.productInfo.origin_price = value.origin_price;
      this.productInfo.unit = value.unit;
      this.productInfo.imagesUrl = value.imagesUrl;
    },
    addProducts() {
      this.axios
        .post(`${this.url}/api/${this.apiPath}/admin/product`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delProduct(value) {
      console.log(value);
      this.productsList = [];
      this.axios
        .delete(`${this.url}/api/${this.apiPath}/admin/product/${value}`)
        .then((res) => {
          console.log(res);
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>