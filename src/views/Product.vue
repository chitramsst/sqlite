<template lang="">
  <h1
    class="w-full text-center font-sans p-5 text-3xl text-[#d4d4dc] font-extrabold"
  >
    PRODUCT MANAGEMENT
  </h1>
  <h1
    class="font-extrabold mb-20"
    :class="!onLine ? 'text-red-500' : 'text-green-500'"
  >
    {{ !onLine ? "Offline" : "online" }}
  </h1>
  <div class="flex flex-col w-full" v-if="loading == false">
    <div class="shadow-lg w-full bg-black/10 rounded-t-xl p-5">
      <div class="flex">
        <!-- <h1 class="w-full text-left p-5 text-2xl font-bold text-cyan-500">
          Add New Product
        </h1> -->
        <div class="flex items-center justify-end w-full p-5 space-x-10">
          <button
            class="rounded-xl px-10 font-bold text-md bg-cyan-500 text-white"
            @click="save()"
            v-if="editid == ''"
          >
            Save
          </button>
          <button
            class="rounded-xl px-10 font-bold text-md bg-[#feda6a] text-black/50"
            @click="update()"
            v-if="editid != ''"
          >
            Update
          </button>
        </div>
      </div>
      <div class="gap-10 flex">
        <div class="flex flex-col w-full p-5 space-y-5">
          <lable class="font-medium text-xl text-[#daaaee]"> Name </lable>
          <input
            type="text"
            class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50 bg-[#393f4d]/50 border-[#daaaee]/20"
            
            v-model="name"
            :class="v$.name.$error ? 'dark:border-red-500' : ''"
          />
        </div>
        <div class="flex flex-col w-full p-5 space-y-5">
          <lable class="font-medium text-xl text-[#daaaee]"> Price </lable>
          <input
            type="text"
            class="h-15 w-full rounded-xl focus:border-stone-500 focus:ring-0 focus:inline-block text-xl text-black/50 bg-[#393f4d]/50 border-[#daaaee]/20"
            
            v-model="price"
            :class="v$.price.$error ? 'dark:border-red-500' : ''"
          />
        </div>
      </div>
    </div>
    <div class="shadow-lg bg-white rounded-b-xl w-full p-10">
      <!-- <h1 class="w-full text-left p-5 text-2xl font-bold text-white/50">
        Products
      </h1> -->

      <div class="">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 text-cyan-500 w-2/6">Product name</th>
              <th scope="col" class="px-6 py-3 text-cyan-500 w-2/6">Price</th>
              <th scope="col" class="px-6 py-3 text-cyan-500 w-2/6"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="row in productList"
              :key="row.rowid"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ row.name }}
              </th>
              <td class="px-6 py-4">
                {{ row.price }}
              </td>
              <td class="px-6 py-4 flex space-x-10">
                <svg
                  fill="none"
                  stroke="#19edc3"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="h-5 w-5"
                  @click="edit(row)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  stroke="#daaaee"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="h-5 w-5"
                  @click="deleteData(row)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  ></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div
    class="flex w-full space-x-36 m-10 justify-center"
    v-if="loading == true"
  >
    Loading.....
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import "vue-advanced-cropper/dist/theme.compact.css";
import Modal from "../components/modals/ProductImageModal.vue";
import SQLite from "tauri-plugin-sqlite-api";
const db = await SQLite.open("./ecommerce.db");
import { ask } from '@tauri-apps/api/dialog';
import { confirm } from '@tauri-apps/api/dialog';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      price: "",
      productList: [],
      showBackOnline: navigator.onLine,
      onLine: navigator.onLine,
      loading: false,
      editid: "",
    };
  },
  mounted() {
    this.createSchema();
    this.getData();
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  },
  methods: {
    /* reset data */
    resetData() {
      this.name = "";
      this.price = "";
      this.v$.$reset();
    },
    async getData() {
      this.productList = await db.select(
        "SELECT rowid,name, price FROM products order by rowid desc LIMIT $1 OFFSET $2",
        [5, 0]
      );
    },
    async createSchema() {
      await db.execute(
        `CREATE TABLE if not exists products (name TEXT, price INTEGER, sync_status INTEGER);`
      );
    },
    async updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
      if (this.onLine) {
        let syncList = await db.select(
          "SELECT rowid,name, price FROM products where sync_status=1"
        );
        if (syncList.length != 0) {
          const yes = await ask('Are you sure to Sync data to server?', 'Sync');
      if(yes){
          this.loading = true;
          try {
          await this.axios
            .post(this.$api_url + "product/save", syncList, {
              method: "POST",
            })
            .then((response) => {
              if (response.data.success == true) {
                let sql = `UPDATE products
            SET sync_status = ?
            WHERE sync_status = ?`;
                let data = ["0", "1"];
                db.execute(sql, data, function (err) {
                  if (err) {
                    return console.error(err.message);
                  }
                });
              }
            });
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        } catch (e) {
          console.log("kkk" + e);
        }
      }
        }
  
      }
    },
    async save() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      let data = {
        name: this.name,
        price: this.price,
      };
      try {
        await db.execute(
          "INSERT INTO products(name,price,sync_status) VALUES(?,?,?)",
          [this.name, this.price, 1],
          function (err) {
            if (err) {
              return console.log(err.message);
            }
            console.log(this.lastID);
          }
        );
        let row_id = await db.select(`SELECT last_insert_rowid() as id;`);
        let last_inserted_id = row_id[0].id;
        console.log(last_inserted_id);
        let last_inserted_data = await db.select(
          "SELECT * FROM products where rowid = ?",
          [last_inserted_id]
        );
        this.productList.unshift(last_inserted_data[0]);
        this.name = "";
        this.price = "";
        this.v$.$reset();
      } catch (e) {
        console.log("kkk" + e);
      }
    },
    edit(row) {
      this.name = row.name;
      this.price = row.price;
      this.editid = row.rowid;
    },
    async update() {
      if (this.rowid != "") {
        let sql = `UPDATE products
            SET name = ?, price = ?
            WHERE rowid = ?`;
        let data = [this.name, this.price, this.editid];
        console.log(data);
        db.execute(sql, data, function (err) {
          console.log("this.editid" + this.editid);
          if (err) {
            return console.error(err.message);
          }
        });
        console.log("this.editid" + this.editid);

        let last_inserted_data = await db.select(
          "SELECT * FROM products where rowid = ?",
          [this.editid]
        );
        let index = this.productList.findIndex((e) => {
          return e.rowid == this.editid;
        });
        console.log("index" + last_inserted_data);
        this.productList[index] = last_inserted_data[0];
        this.name = "";
        this.price = "";
        this.editid = "";
      }
    },
    async deleteData(row){
      const yes = await ask('Are you sure?', 'Remove');
      if(yes){

      }
    }
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },
  },
  validations() {
    return {
      name: { required },
      price: { required, numeric },
    };
  },
};
</script>
<style>
.upload-example {
  margin-top: 20px;
  margin-bottom: 20px;
  user-select: none;
}
.upload-example__cropper {
  border: solid 1px #eee;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
}
.upload-example__cropper-wrapper {
  position: relative;
}

.upload-example__buttons-wrapper {
  display: flex;
  justify-content: center;
}
.upload-example__button {
  border: none;
  outline: solid transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s;
  margin: 0 16px;
}
.upload-example__button input {
  display: none;
}
.upload-example__file-type {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #0d0d0d;
  border-radius: 5px;
  padding: 0px 10px;
  padding-bottom: 2px;
  font-size: 12px;
  color: white;
}
</style>
