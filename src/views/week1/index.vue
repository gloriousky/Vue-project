<template>
  <div class="flex flex-col items-center mx-auto">
    <div class="">
      <div class="col-md-6">
        <h2>產品列表</h2>
        <table class="border-4 border-gray-800 bg-white">
          <thead class="border-b-4 border-gray-800">
            <tr>
              <th width="150">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="150">是否啟用</th>
              <th width="120">查看細節</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="value in productsList"
              :key="value.id"
              class="border-b border-gray-400"
            >
              <td width="150">{{ value.title }}</td>
              <td width="120">
                {{ value.origin_price }}
              </td>
              <td width="120">
                {{ value.price }}
              </td>
              <td width="150">
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
            <img :src="value" alt="" class="w-60 flex mx-auto" />
          </template>
        </template>
        <p v-else class="">請選擇一個商品查看</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      productsList: [
        {
          category: "甜甜圈",
          content: "尺寸：14x14cm",
          description:
            "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
          id: "-L9tH8jxVb2Ka_DYPwng",
          is_enabled: 1,
          origin_price: 150,
          price: 99,
          title: "草莓莓果夾心圈",
          unit: "個",
          num: 10,
          imageUrl:
            "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          imagesUrl: [
            "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
            "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          ],
        },
        {
          category: "蛋糕",
          content: "尺寸：6寸",
          description:
            "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
          id: "-McJ-VvcwfN1_Ye_NtVA",
          is_enabled: 1,
          origin_price: 1000,
          price: 900,
          title: "蜂蜜檸檬蛋糕",
          unit: "個",
          num: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
          imagesUrl: [
            "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
          ],
        },
        {
          category: "蛋糕",
          content: "尺寸：6寸",
          description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
          id: "-McJ-VyqaFlLzUMmpPpm",
          is_enabled: 1,
          origin_price: 700,
          price: 600,
          title: "暗黑千層",
          unit: "個",
          num: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          imagesUrl: [
            "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
            "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          ],
        },
      ],
    };
  },
  mounted() {

  },
  methods: {
    getProductInfo(value) {
      console.log(value.title);
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
  },
};
</script>